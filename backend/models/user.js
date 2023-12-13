const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Profile = require('./profile')
// const Outfit = require('./outfit');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

User.hasOne(Profile, { foreignKey: 'user_id' }); // hosts profile model via foreign key
// User.hasMany (Outfit, { foreignKey: 'user_id' }) // do i need to connect user to outfit or can i just connect profile to outfit?

module.exports = User;
