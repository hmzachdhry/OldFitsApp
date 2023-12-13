const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Profile = require('./profile');
const Outfit = require('./outfit');

const Weather = sequelize.define('Weather', {
  temperature: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Weather.belongsTo(Profile, { foreignKey: 'profile_id' });
Weather.belongsTo(Outfit, { foreignKey: 'outfit_id' });

module.exports = Weather;
