const { Router } = require("express");

const SessionsControler = require("../controllers/SessionsController");
const sessionsControler = new SessionsControler();

const sessionsRoutes = Router();
sessionsRoutes.post("/", sessionsControler.create)

module.exports = sessionsRoutes;