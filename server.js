const express = require("express");

const RecipeRouter = require("./recipes/recipe-routes");

const server = express();

server.use(express.json());
server.use("/api", RecipeRouter);

module.exports = server;
