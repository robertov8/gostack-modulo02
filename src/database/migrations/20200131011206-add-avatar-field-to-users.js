'use strict';

/**
 * @typedef { import('sequelize').Sequelize } Sequelize
 * @typedef { import('sequelize').QueryInterface } QueryInterface
 * @argument { Sequelize } Sequelize
 * @argument { QueryInterface } queryInterface
 */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'avatar_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
