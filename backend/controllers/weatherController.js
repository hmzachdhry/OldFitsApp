const { Weather, Outfits } = require('../models');

const createWeatherForOutfit = async (req, res, next) => {
  try {
    const { temperature, description, location, outfitId } = req.body;

    // Check if the outfit with the specified ID exists
    const outfit = await Outfits.findByPk(outfitId);
    if (!outfit) {
      return next({
        log: `Outfit with ID ${outfitId} not found`,
        status: 404,
        message: { err: 'Outfit not found' },
      });
    }

    // Create weather condition and associate it with the outfit
    const newWeather = await Weather.create({
      outfit_id: outfitId,
      temperature,
      description,
      location,
    });

    res.status(201).json(newWeather);

    return next();
  } catch (err) {
    return next({
      log: `Error in createWeatherForOutfit controller: ${err}`,
      status: 400,
      message: {
        err: 'An error occurred while creating weather for the outfit',
      },
    });
  }
};

module.exports = { createWeatherForOutfit };
