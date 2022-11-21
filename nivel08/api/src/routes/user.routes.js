const Router = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

// function myMiddleware(request, response, next) {
//   if (!request.body.isAdmin) {
//     return response.json({ message: "usuário não autorizado"})
//   }

//   next();
// }

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes;
