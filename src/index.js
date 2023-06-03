const express = require("express");
const body_parser = require("body-parser");

const CityRepository = require("./repository/city-repository");
// require("dotenv").config();
// const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  //create the express object
  const app = express();

  app.use(body_parser.json());
  app.use(body_parser.urlencoded({ extended: true })); //Only parses the url-encoded bodies

  const PORT = 3000;
  app.listen(PORT, async () => {
    console.log(`Server Started at ${PORT}`);
    const repo = new CityRepository();
    repo.deleteCity(1);
  });
};

setupAndStartServer();
