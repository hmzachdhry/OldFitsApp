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

});

Images.belongsTo(Outfits, { foreignKey: 'outfit_id' }); 
export default Images;
