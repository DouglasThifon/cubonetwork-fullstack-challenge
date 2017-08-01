import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config/config';
import connect from './database';
import Employee from './model/employee';

const app = express();
app.use(cors());
app.use(bodyParser.json());
connect(config);

app.route('/employees')
  .get((req, res) => {
    Employee
      .find({}, { __v: false, _id: false })
      .then((employees) => {
        res.json(employees);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  })
  .post((req, res) => {
    Employee
      .create(req.body)
      .then(() => {
        res.sendStatus(201);
      })
      .catch((err) => {
        if (err.name === 'ValidationError') {
          const errors = Object.values(err.errors).map((fieldError => fieldError.message));
          res.status(400).send({ errors });
          return;
        }
        console.error(err);
        res.sendStatus(500);
      });
  },
  );

export default app;
