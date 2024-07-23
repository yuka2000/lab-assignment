//console.log('test');

import express from 'express';
//importing the json content
import data from './data/MOCK_DATA.json' assert { type:'json'};


//or import
const app = express()

const port = 3000
// our code
// CRUD

//console.log(data);

app.get('/cars', (req, res) => {
    res.json(data);
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  })