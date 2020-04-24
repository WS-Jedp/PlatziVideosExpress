const express = require('express');
const MoviesService = require('../services/moviesService');

function moviesApi(app){
  const routerMovies = express.Router();
  app.use('/api/movies', routerMovies);

  const moviesService = new MoviesService();
  

  routerMovies.get('/', async function(req, res, next){
    try {
      
      const movies = await moviesService.getMovies(); 

      res.status(200).json({
        data: movies,
        message: 'The movies list that we have'
      });

    } catch (err) {
      next(err);
    }
  })

  routerMovies.get('/:id', async function(req, res, next){

    try{
      const idMovie = req.params.id;
      idMovie.toString();
      const movie = await moviesService.getMovie(idMovie);  

      res.status(200).json({
        data: movie,
        message: 'This is the movie that you looking for'
      });

    }catch(err){
      next(err);
    }
  })

}

module.exports = moviesApi;
