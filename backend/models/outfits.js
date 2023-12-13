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

Outfits.belongsTo(Profiles, { foreignKey: 'profile_id' }); // connected to Profile model
Outfits.hasOne(Weather, { foreignKey: 'outfit_id' });
Outfits.hasMany(Images, { foreignKey: 'outfit_id' });
// Outfit.belongsTo (User, { foreignKey: 'user_id' }) // connected to User model via user_id
export default Outfits;
