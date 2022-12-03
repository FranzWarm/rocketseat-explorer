const { hash, compare } = require("bcryptjs");
const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    if (!name || !email || !password) {
      let s, sao;
      const fields = [];
      if (!name) fields.push("Nome");
      if (!email) fields.push("Email");
      if (!password) fields.push("Password");

      fields.length == 1 ? ((s = ""), (sao = "é")) : ((s = "s"), (sao = "são"));

      throw new AppError(
        `O${s} seguinte${s} campo${s} ${sao} obrigatório${s}: ${fields.join(
          ", "
        )}`
      );
    }

    const checkUserExists = await knex("users")
      .first("id")
      .where("email", email);

    if (checkUserExists) {
      throw new AppError("Email já existe.");
    }

    const hashedPassword = await hash(password, 8);
    hashedPassword;

    await knex("users").insert({
      name,
      email,
      password: hashedPassword,
    });

    return response.status(201).json({ Sucesso: "Usuário cadastrado!" });
  }

  async update(request, response) {
    const { name, email, avatar, password, old_password } = request.body;
    const { id } = request.params;

    const user = await knex("users").where("id", id).first();

    if (!user) {
      throw new AppError("Usuário não encontrado!");
    }

    if (email) {
      const emailInUse = await knex("users").where("email", email).first();

      if (emailInUse && emailInUse.id !== user.id) {
        throw new AppError("Este email já está em uso.");
      }
    }

    if (password && !old_password) {
      throw new AppError(
        "Você precisa informar a senha antiga para definir a nova senha."
      );
    }

    if (password && old_password) {
      const passwordMatch = await compare(old_password, user.password);

      if (!passwordMatch) {
        throw new AppError("A senha antiga não confere.");
      }

      const samePassword = await compare(password, user.password);

      if (!samePassword) {
        user.password = (await hash(password, 8)) ?? user.password;
      }
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.avatar = avatar ?? user.avatar;

    await knex("users").where("id", id).update({
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      updated_at: knex.fn.now(),
      password: user.password,
    });

    return response.json();
  }
}

module.exports = UsersController;
