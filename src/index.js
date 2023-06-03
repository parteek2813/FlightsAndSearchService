const express = require("express");
const body_parser = require("body-parser");
// require("dotenv").config();
// const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  //create the express object
  const app = express();

  app.use(body_parser.json());
  app.use(body_parser.urlencoded({ extended: true })); //Only parses the url-encoded bodies

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
  });
};

setupAndStartServer();
