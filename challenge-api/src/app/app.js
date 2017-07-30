import express from 'express';
import config from './config/config';
import connect from './database';
import Employee from './model/employee';

const app = express();

connect(config);

app.get('/employees', (req, res) => {
  Employee
    .find({}, { __v: false, _id: false })
    .then((employees) => {
      res.json(employees);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

export default app;
