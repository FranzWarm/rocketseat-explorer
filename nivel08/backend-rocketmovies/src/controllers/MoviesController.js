const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class MoviesController {
  async create(request, response) {
    const { title, description, rating, tags } = request.body;
    const { user_id } = request.params;

    if (!title) {
      throw new AppError("O título do filme é obrigatório!");
    }

    const checkMovieExists = await knex("movies")
      .first("id")
      .where("title", title);

    if (checkMovieExists) {
      throw new AppError("O filme já existe.");
    }

    if (rating < 0 || rating > 5) {
      throw new AppError("Insira uma nota entre 0 e 5.");
    }

    const movie_id = await knex("movies").insert({
      title,
      description,
      rating,
      user_id,
    });

    if (tags) {
      const tagsInsert = tags.map((name) => {
        return {
          movie_id,
          user_id,
          name,
        };
      });

      await knex("tags").insert(tagsInsert);
    }

    return response.status(201).json({ Sucesso: "Filme cadastrado!" });
  }

  async delete (request, response) {
    const { id } = request.params;
    const movie = await knex("movies").where({ id }).first();

    await knex("movies").where({ id }).delete();

    return response.json(`O filme ${movie.title} foi excluído.`)
  }
}

module.exports = MoviesController;
