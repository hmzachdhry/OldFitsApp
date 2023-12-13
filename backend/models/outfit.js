const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Profile = require('./profile');
const Weather = require('./weather');
const Images = require('./images');

const Outfit = sequelize.define('Outfit', {
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  occasion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
// Do I need to add the image URL here?

Outfit.belongsTo(Profile, { foreignKey: 'profile_id' }); // connected to Profile model
Outfit.hasOne(Weather, { foreignKey: 'outfit_id' });
Outfit.hasMany(Images, { foreignKey: 'outfit_id' });
// Outfit.belongsTo (User, { foreignKey: 'user_id' }) // connected to User model via user_id
module.exports = Outfit;
