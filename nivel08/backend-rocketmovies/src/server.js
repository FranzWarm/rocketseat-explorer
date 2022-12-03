require("express-async-errors");

const AppError = require("./utils/AppError");
const express = require("express");
const routes = require("./routes");
const database = require("./database/sqlite");
const knex = require("./database/knex");
const app = express();

database();
knex.migrate.latest();

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.log(">>>>>>>>>>>> ERROR START >>>>>>>>>>>>")
  console.error(error);
  console.log("<<<<<<<<<<<< ERROR END <<<<<<<<<<<<")


  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`>>> Server iniciado na porta ${PORT}`));
