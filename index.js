const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', function(req, res){
  res.end('Hello world from Express',() => {
    return false;
  });
});

app.get('/:year', function(req, res){

  const actualYear = req.params.year

  if(actualYear % 4 === 0){
    res.end(`Hello there, you are in the year ${actualYear}, so this year is a leap year`)
  } else {
    res.end(`Hello there, you are in the year ${actualYear}, so this year isn't a leap year`)
  }


  res.end(`You are here (°-°)`);
})

app.listen(config.port, function(){
  console.log(`The server has started on: http://localhost:${config.port}`);
});
