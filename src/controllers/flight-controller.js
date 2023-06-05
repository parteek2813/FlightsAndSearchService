const { FlightService } = require("../services/index");

const flightservice = new FlightService();

const create = async (req, res) => {
  try {
    // const flight = await FlightService.createFlight(req.body);
    const flight = await flightservice.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      err: {},
      message: "Successfully created a flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await flightservice.getAllFlightData(req.query);
    res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully fetched the flights",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch all flights",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
};
