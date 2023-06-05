const CrudService = require("./crud-service");
const { AirportRepository } = require("../repository/index");
// const { Airport } = require("../models/index");

class AirportService extends CrudService {
  constructor() {
    const airportrepository = new AirportRepository();
    super(airportrepository);
  }
}

module.exports = AirportService;
