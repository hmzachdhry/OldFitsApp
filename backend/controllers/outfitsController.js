const { Outfits, Images } = require('../models');

const createOutfit = async (req, res, next) => {
  try {
    const { location, occasion, images } = req.body;

    // Creates the outfit
    const newOutfit = await Outfits.create({ location, occasion });

    // If images exist, associate them with the outfit
    if (images && images.length > 0) {
      // async sends multiple requests
      const imagePromises = images.map(async (image) => {
        // Create images and associate them with outfit
        return Images.create({ url: image, outfit_id: newOutfit.id });
      });

      await Promise.all(imagePromises);
    }

    res.status(201).json(newOutfit);

    return next();
  } catch (err) {
    return next({
      log: `Error in createOutfit controller: ${err}`,
      status: 400,
      message: { err: 'An error occurred while creating the outfit' },
    });
  }
};

module.exports = { createOutfit };
