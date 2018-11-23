'use strict';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import config from './config';
import routes from './REST/routes';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));





app.use(cors());
app.listen(config.port, () => {
  console.info(`Server is running at ${config.port}`)
});
mongoose.connect(config.databaseUrl, {useNewUrlParser: true, useCreateIndex: true}, (error) => {
  if (error) {
    console.error(error);
  }
  else {
    console.log('Connect with database established');
  }
});
routes(app);
app.listen(config.port, () => {
  console.info(`Server is running at ${config.port}`)
});
