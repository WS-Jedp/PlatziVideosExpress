const moviesMock = require('../utils/mocks/movies');


class MoviesService {
  movies = [];

  constructor(){
    this.movies = Promise.resolve(moviesMock);
  }

  async getMovies(){
    return this.movies || [];
  }

  async getMovie(id){
      const movie = Array.from(this.movies).filter(({idMovie}) => idMovie === id);
      return movie || {};
  }
}

module.exports = MoviesService;