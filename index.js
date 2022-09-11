const {db} = require('./config.js');
const express = require('express');
const cors = require('cors');

const appExpress = express();


appExpress.use(cors());

appExpress.get('/', (req, res, next) => {
  console.log(req.body);
  console.log(req.params);
  res.send({response: 'Good'});
});

appExpress.get('/login', (req, res, next) => {
  console.log(req.body);
  console.log(req.params);
  res.send(req.query);
});

appExpress.get('/user/:id', (req, res, next) => {
  console.log(req.body);
  console.log(req.params);
  console.log(db.collection('posts'))
  res.send(req.params.id);
});

appExpress.listen(4000, () => console.log('Up & RUnning *4000'));
