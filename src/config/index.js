const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

const configVar = {
  SECRET_KEY: process.env.SECRET_KEY,
  PORT: process.env.PORT,
};

module.exports = configVar;
