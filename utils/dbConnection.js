const mongoose = require('mongoose');

const connectDB = async dbUrl => {
  try {
    console.log(dbUrl);
    mongoose.set('strictQuery', true);
    await mongoose.connect(dbUrl, () => {
      console.log('Database connected sucessfully✅');
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connectDB };
