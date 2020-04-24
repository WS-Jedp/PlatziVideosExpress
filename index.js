const express = require('express');
const app = express();

const moviesApi = require('./routes/movies');


const { config } = require('./config/index');


// ----------- Server ----------------
moviesApi(app);

// ----------- Challenge ----------------
// app.get('/:year', function(req, res){

//   const actualYear = req.params.year

//   if(actualYear % 4 === 0){
//     res.end(`Hello there, you are in the year ${actualYear}, so this year is a leap year`)
//   } else {
//     res.end(`Hello there, you are in the year ${actualYear}, so this year isn't a leap year`)
//   }


//   res.end(`You are here (°-°)`);
// })

app.listen(config.port, function(){
  console.log(`The server has started on: http://localhost:${config.port}`);
});
