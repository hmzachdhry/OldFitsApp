import { Sequelize } from 'sequelize';
const config = require('./config.json')[development];
const sequelize = new Sequelize(config);

export default sequelize;
