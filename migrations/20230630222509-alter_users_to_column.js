'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    
    await queryInterface.addColumn('Users','group',{
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.addColumn('Users','permissions',{
      type: Sequelize.STRING,
      allowNull: false,
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeColumn('Users','group');
    await queryInterface.removeColumn('Users','permissions');

  }
};
