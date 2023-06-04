const { Op } = require("sequelize");

const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    //creating the try-catch block for lets say we want to
    // delete an entry/city that does not exist.

    // Go from city table, delete a city where id = cityId;
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      throw { error };
    }
  }

  async getCity(cityId) {
    // Here we can't destructure the cityId as it will violate destructuring
    // Use the arguments in the pair of round brackets

    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      // Below code will also work but will not return updated object
      // if using pg, then returning: true can be used.
      // update function takes key:value pair ==> Key what column u wannna update
      // value ==> what value u wanna update
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      //   returning: true,
      //   plain: true,
      // });

      const city = await City.findByPk(cityId);
      city.name = data.name;

      await city.save();

      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }

      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
