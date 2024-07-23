//console.log('test');

import express from 'express';
//or import
const app = express()
const port = 3000
// our code
// CRUD


app.get('/', (req, res) => {
  res.data('<p>welcome to my class. The node JS back-end framewprd </p>')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost: ${port}/cars`)
})
