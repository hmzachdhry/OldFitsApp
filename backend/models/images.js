const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Outfit = require('./outfit');

const Image = sequelize.define('Image', {
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  uploadTime: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.fn('NOW'),
  },
});

Image.belongsTo(Outfit, { foreignKey: 'outfit_id' }); // rename to outfit_id?
module.exports = Image;
