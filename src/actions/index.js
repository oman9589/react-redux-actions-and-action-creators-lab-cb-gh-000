// define your actions here!
export function addMovie(movie){
  return {
    type: 'ADD_MOVIE',
    title: movie.title
  }
}
