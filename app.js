const express = require('express');
const appRoute =require('./src/route/RouteCrud');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb://0.0.0.0:27017/cme').then(() =>{
  console.log('database successfully connected');
}).catch((error)=>{
  console.log(error);
})

app.use('/',appRoute);

const PORT = 4005;

app.listen(PORT,() => {
  console.log(`Server running on ${PORT} port!`);
});

