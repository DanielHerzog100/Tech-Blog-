const { User } = require("../models");

const userData = [
  {
    user_name: "sal@hotmail.com",
    password: "password12345",
  },
];

module.exports = () => User.bulkCreate(userData);
