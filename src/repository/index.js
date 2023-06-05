// This index file will be used to combine all the repo
// inside the one file only and wherever neccessary this can be imported

module.exports = {
  CityRepository: require("./city-repository"),
  FlightRepository: require("./flight-repository"),
  AirPlaneRepository: require("./airplane-repository"),
};
