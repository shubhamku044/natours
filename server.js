const dotenv = require('dotenv');
const app = require('./app');
const { connectDB } = require('./utils/dbConnection');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3000;
const dbUrl = process.env.MONGODB_URL.replace(
  '<USERNAME>',
  process.env.USERNAME
).replace('<PASSWORD>', process.env.PASSWORD);

connectDB(dbUrl);

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
