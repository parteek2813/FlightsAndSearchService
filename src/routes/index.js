const express = require("express");
const router = express.Router();

const v1ApiRoutes = require("./v1/index");

router.use('/v1', v1ApiRoutes);

module.exports = router;

// Routing path lets take an example of v1/city/
// First comes to index.js and here we say whenever u see the /v1
// , go to v1ApiRoutes and then over there u see /city, go the the CityController
// then there if u see just call the create function!!
