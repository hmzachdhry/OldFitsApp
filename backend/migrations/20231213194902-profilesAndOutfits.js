'use strict';

const { DataTypes, fn } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Profiles', {
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
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
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
    await queryInterface.createTable('Outfits', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
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

    // await queryInterface.addColumn('Profiles', 'user_id', {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'Users',
    //     key: 'id',
    //   },
    //   onUpdate: 'CASCADE',
    //   onDelete: 'CASCADE',
    // });

    // await queryInterface.addColumn('Outfits', 'profile_id', {
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: 'Profiles',
    //       key: 'id',
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'CASCADE',
    // });
   },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Profiles');
    await queryInterface.dropTable('Outfits');
  },
};
