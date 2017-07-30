import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import connect from './database';
import Employee from './model/employee';

const app = express();
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
        console.error(err);
        res.sendStatus(500);
      });
  },
  );

export default app;
