'use strict';

module.exports = {

  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Users', [{

      firstName: 'TuongClearlove7',
      lastName: 'TuongClearlove7',
      email: 'lol00sever@gmail.com',
      password: '12343211234321',
      createdAt: new Date(),
      updatedAt: new Date()

      }]);
  },

  async down (queryInterface, Sequelize) {
   
  }
};
