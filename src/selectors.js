export const getUniqueMovies = state => {
  let uniqueMovieTitle = state.movies.map(movie => movie.title)
  uniqueMovieTitle = uniqueMovieTitle.filter((title, index) => uniqueMovieTitle.indexOf(title) === index )
  return uniqueMovieTitle
}

export const getMovieLocations = (state, title) => {
  let selectedMovie = state.movies.filter(movie => movie.title === title)
  let allLocations = selectedMovie.map(item => item.hasOwnProperty('locations') ? item.locations : '')
  allLocations = allLocations.filter(item => item !== '')
  // console.log(allLocations)
  // let uniqueLocation = allLocations.filter((location, index) => allLocations.indexOf(location) ===  index)
  let uniqueLocation = allLocations.filter((location, index) => allLocations.indexOf(location) ===  index)
                        .map(item => ({
                          locations: item,
                          latitude: '',
                          longitude: ''
                        }))
  // console.log(uniqueLocation)
  return uniqueLocation
}

export const getMoviesLoading = state => state.isLoading

export const getMovieDetails = state => state.movieDetails