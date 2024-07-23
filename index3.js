//console.log('test');

import express from 'express';
//importing the json content
import data from './data/MOCK_DATA.json' assert { type:'json'};


//or import
const app = express()

const port = 3000
// our code

//http://localhost:3000/cars
app.get('/cars', (req, res) => {
    res.json(data);
    

    const cars = data.filter(()=>{
        const cars = Name(req.params.name);
        return cars.name === req.query.name;
    });
    res.send(cars);
  });


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost: ${port}/cars`)
  })
  