import { DataTypes } from 'sequelize';
import { define } from '../config/sequelize';
import Profiles from './profiles';
import Outfits from './outfits';

const Weather = define('Weather', {
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
});

Weather.belongsTo(Profiles, { foreignKey: 'profile_id' });
Weather.belongsTo(Outfits, { foreignKey: 'outfit_id' });

export default Weather;
