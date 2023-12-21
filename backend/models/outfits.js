import { DataTypes } from 'sequelize';
import { define } from '../config/sequelize';
import Profiles from './profiles';
import Weather from './weather';
import Images from './images';

const Outfits = define('Outfits', {
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  occasion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  images: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Outfits.belongsTo(Profiles, { foreignKey: 'profile_id' }); // connected to Profile model
Outfits.hasOne(Weather, { foreignKey: 'outfit_id' });
Outfits.hasMany(Images, { foreignKey: 'outfit_id' });

export default Outfits;
