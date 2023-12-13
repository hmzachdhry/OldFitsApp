import { DataTypes } from 'sequelize';
import { define } from '../config/sequelize';
import Users from './users';
import Outfits from './outfits';

const Profiles = define('Profiles', {
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

Profiles.belongsTo(Users, { foreignKey: 'user_id' }); // belongs to profile model via user_id
Profiles.hasMany(Outfits, { foreignKey: 'profile_id' });

export default Profiles;
