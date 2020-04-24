require('dotenv').config();

const config = {
  dev: proccess.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000
};

module.exports = { config };
