const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./user');
const Outfit = require('./outfit');

const Profile = sequelize.define('Profile', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Profile.belongsTo(User, { foreignKey: 'user_id' }); // belongs to profile model via user_id
Profile.hasMany(Outfit, { foreignKey: 'profile_id' });

module.exports = Profile;
