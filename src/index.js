const express = require("express");
const body_parser = require("body-parser");

// require("dotenv").config();
// const { PORT } = require("./config/serverConfig");
// const { Airplane } = require("./models/index");

const sequelize = require("sequelize");
const db = require("./models/index");
const ApiRoutes = require("./routes/index");
const airport = require("./models/airport");
const city = require("./models/city");
// const { sequelize } = require("./models");

const setupAndStartServer = async () => {
  //create the express object
  const app = express();

  app.use(body_parser.json());
  app.use(body_parser.urlencoded({ extended: true })); //Only parses the url-encoded bodies

  app.use("/api", ApiRoutes);

  const PORT = 3000;
  app.listen(PORT, async () => {
    console.log(`Server Started at ${PORT}`);

    // await Airplane.create({
    //   modelNumber: "Bombardier CRJ",
    // });
    // const city = await City.findOne({
    //   where: {
    //     id: 8,
    //   },
    // });

    //
    // db.sequelize.sync({
    //   alter: true,
    // });
    //
    // const airports = await city.getAirports();
    // console.log(city, airports);
  });
};

setupAndStartServer();
