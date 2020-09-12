import {
  loadMoviesInProgress,
  loadMoviesSuccess,
  loadMoviesFailure,
  loadMovieDetailsInProgress,
  loadMovieDetailsSuccess,
  loadMovieDetailsFailure
} from './store/actions'
import axios from 'axios'

export const loadMovies = () => async dispatch => {
  try {
    dispatch(loadMoviesInProgress())
    const res = await axios.get('https://data.sfgov.org/resource/yitu-d5am.json')
    const movies = await res.data
    // console.log(movies)

    // let uniqueMovieTitle = movies.map(movie => movie.title)
    // uniqueMovieTitle = uniqueMovieTitle.filter((title, index) => uniqueMovieTitle.indexOf(title) === index )
    // console.log(uniqueMovieTitle)

    dispatch(loadMoviesSuccess(movies))
  } catch (e) {
    dispatch(loadMoviesFailure())
    dispatch(displayAlert(e))
  }
}

export const loadMovieDetails = movie => async dispatch => {
  try {
    dispatch(loadMovieDetailsInProgress())
    const res = await axios.get(`https://www.omdbapi.com/?apikey=3aa24b63&t=${movie}`)
    const movieDetails = await res.data

    // console.log(movieDetails)

    dispatch(loadMovieDetailsSuccess(movieDetails))
  } catch (e) {
    dispatch(loadMovieDetailsFailure())
    dispatch(displayAlert(e))
  }
}

export const displayAlert = text => () => {
  alert(text)
}