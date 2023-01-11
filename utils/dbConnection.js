const mongoose = require('mongoose');

const connectDB = async dbUrl => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(
      dbUrl,
      {
        dbName: 'natours'
      },
      () => {
        console.log('Database connected sucessfully✅');
      }
    );
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { connectDB };
