const { FlightService } = require("../services/index");
const { SuccessCodes } = require("../utils/error-codes");

const flightservice = new FlightService();

const create = async (req, res) => {
  const flightRequestData = {
    flightNumber: req.body.flightNumber,
    airplaneId: req.body.airplaneId,
    departureAirportId: req.body.departureAirportId,
    arrivalAirportId: req.body.arrivalAirportId,
    arrivalTime: req.body.arrivalTime,
    departureTime: req.body.departureTime,
    price: req.body.price,
  };
  try {
    // const flight = await FlightService.createFlight(req.body);
    const flight = await flightservice.createFlight(flightRequestData);
    return res.status(SuccessCodes.CREATED).json({
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
    res.status(SuccessCodes.OK).json({
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

const get = async (req, res) => {
  try {
    const response = await flightservice.getFlight(req.params.id);
    res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully fetched the flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch all flight",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await flightservice.updateFlight(req.params.id, req.body);
    res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully updated the flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update all flight",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
  get,
  update,
};
