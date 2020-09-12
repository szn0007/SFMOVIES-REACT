import {
  LOAD_MOVIES_IN_PROGRESS,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_FAILURE,
  LOAD_MOVIE_DETAILS_IN_PROGRESS,
  LOAD_MOVIE_DETAILS_SUCCESS,
  LOAD_MOVIE_DETAILS_FAILURE,
} from './actions'

export const isLoading = (state = false, action) => {
  const { type } = action
  switch (type) {
    case LOAD_MOVIES_IN_PROGRESS:
    case LOAD_MOVIE_DETAILS_IN_PROGRESS:
      return true
    case LOAD_MOVIES_SUCCESS:
    case LOAD_MOVIES_FAILURE:
    case LOAD_MOVIE_DETAILS_SUCCESS:
    case LOAD_MOVIE_DETAILS_FAILURE:  
      return false
    default:
      return state
  }
}

export const movies = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case LOAD_MOVIES_SUCCESS: {
      const { movies } = payload
      return movies
    }
    case LOAD_MOVIES_IN_PROGRESS:
    case LOAD_MOVIES_FAILURE:
    default:
      return state
  }
}

export const movieDetails = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case LOAD_MOVIE_DETAILS_SUCCESS: {
      const { movieDetails } = payload
      return movieDetails
    }
    case LOAD_MOVIE_DETAILS_IN_PROGRESS:
    case LOAD_MOVIE_DETAILS_FAILURE:
    default:
      return state
  }
}
