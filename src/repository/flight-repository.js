// const { Flight } = require("../models/index");
const { Flights } = require("../models/index");

class FlightRepository {
  async createFlight(data) {
    console.log(data);
    try {
      //   const flight = await Flight.create(data);
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
