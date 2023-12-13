import { DataTypes } from 'sequelize';
import { define, fn } from '../config/sequelize';
import Outfits from './outfits';

const Images = define('Images', {
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
    defaultValue: fn('NOW'),
  },
});

Images.belongsTo(Outfits, { foreignKey: 'outfit_id' }); // rename to outfit_id?
export default Images;
