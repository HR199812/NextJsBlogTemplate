const express = require("express");
const articleController = require("../controllers/articleController");
// const server = express();
const articleRouter = require("express").Router();

// articleRouter.post("/get", articleController.addAdmin);
// articleRouter.get("/test", articleController.test);

module.exports = articleRouter;
