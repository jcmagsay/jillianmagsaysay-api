import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './router';

dotenv.config();

// Connect to MongoDB
mongoose.createConnection(process.env.MONGOLAB_URI, (error) => {
  if (error) console.error(error);
  else console.log('MongoDB connected for jillianmagsaysay-api!')
}, { useMongoClient: true});

mongoose.connect(process.env.MONGOLAB_URI, { useMongoClient: true});

// Initialize http server
const app = express();

app
  .use(bodyParser.json()) // support json encoded bodies
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/api', router); // Use v1 as prefix for all API endpoints

const server = app.listen(process.env.PORT || 5000, () => {
    const { address, port } = server.address();
    console.log(`Listening at http://${address}:${port}`);
  });
