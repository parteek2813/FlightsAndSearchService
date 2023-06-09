// const { FlightRepository, AirPlaneRepository } = require("../repository/index");

const FlightRepository = require("../repository/flight-repository");
const AirPlaneRepository = require("../repository/airplane-repository");
const compareTime = require("../utils/helper");

class FlightService {
  constructor() {
    this.airplanerepository = new AirPlaneRepository();
    this.flightrepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival time can not be lees than the departure " };
      }
      const airplane = await this.airplanerepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightrepository.createFlight({
        ...data,
        totalSeats: airplane ? airplane.capacity : 0,
      });

      return flight;
    } catch (error) {
      console.log("SOmething went wrong at service layers");
      throw error;
    }
  }

  async getAllFlightData(data) {
    console.log(data);
    try {
      const flights = this.flightrepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("SOmething went wrong at service layers");
      throw error;
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await this.flightrepository.getFlight(flightId);
      return flight;
    } catch (error) {
      console.log("SOmething went wrong at service layers");
      throw error;
    }
  }

  async updateFlight(flightId, data) {
    try {
      const response = await this.flightrepository.updateFlights(
        flightId,
        data
      );
      return response;
    } catch (error) {
      console.log("SOmething went wrong at service layers");
      throw error;
    }
  }
}

module.exports = FlightService;

/**
 * {
 *  flightNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * price,
 * totalSeats --> airplane [fetch from airplane]
 * }
 *
 */
