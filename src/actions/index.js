// define your actions here!
export function addMovie(movie) {
  return {
    type: 'ADD_MOVIE',
    movie: {
      title: movie.title
    }
  }
}

export function deleteMovie(movie) {
  return {
    type: 'DELETE_MOVIE',
    movie: {
      title: movie.title
    }
  }
}

export function updateUsername(newName) {
  return {
    type: 'UPDATE_USERNAME',
    username: newName
  }
}

export function updateUsername() {
  return {
    type: 'RESET_USERNAME' 
  }
}
