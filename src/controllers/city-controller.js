// const { CityService } = require("../services/index");

// const cityService = new CityService();

const { CityService } = require("../services/index");

const cityService = new CityService();
/* 
* Type of request will be : POST
* data -> req.body

// The usecase of controller is request is going to come on this controller
// and the corresponding request data is passed to all services, repo layer and they will
// process somehow things and give it back to the controller layer where controller layer 
// will prepare the corresponding response structure based on the request and then give 
// it back on the client side


*/
const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: "",
      success: false,
      message: "Not able to create the city",
      err: error,
    });
  }
};

//DELETE -> /city/:id
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: "",
      success: false,
      message: "Not able to delete the city",
      err: error,
    });
  }
};

// GET -> /city/:id/
const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: "",
      success: false,
      message: "Not able to get the city",
      err: error,
    });
  }
};

// PATCH -> /city/:id --> req.body
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully updated a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: "",
      success: false,
      message: "Not able to update the city",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
};
