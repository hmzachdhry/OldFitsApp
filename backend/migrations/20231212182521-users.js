'use strict';

const { DataTypes, fn } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users',  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: fn('NOW'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: fn('NOW'),
      },
    });

      await queryInterface.addColumn('Users', 'user_id', {
        type: DataTypes.INTEGER,
        references: {
          model: 'Profiles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'user_id'); // Removes foreign key
    await queryInterface.dropTable('Users');
  },
};
