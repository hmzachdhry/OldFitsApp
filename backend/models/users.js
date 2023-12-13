import { DataTypes } from 'sequelize';
import { define } from '../config/sequelize';
import Profiles from './profiles';

const Users = define('Users', {
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

Users.hasOne(Profiles, { foreignKey: 'user_id' }); // hosts profile model via foreign key
// Users.hasMany (Outfit, { foreignKey: 'user_id' }) // do i need to connect user to outfit or can i just connect profile to outfit?

export default Users;
