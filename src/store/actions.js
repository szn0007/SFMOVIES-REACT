export const LOAD_MOVIES_IN_PROGRESS = 'LOAD_MOVIES_IN_PROGRESS'
export const loadMoviesInProgress = () => ({
  type: LOAD_MOVIES_IN_PROGRESS
})

export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS'
export const loadMoviesSuccess = movies => ({
  type: LOAD_MOVIES_SUCCESS,
  payload: { movies }
})

export const LOAD_MOVIES_FAILURE = 'LOAD_MOVIES_FAILURE'
export const loadMoviesFailure = () => ({
  type: LOAD_MOVIES_FAILURE
})

export const LOAD_MOVIE_DETAILS_IN_PROGRESS = 'LOAD_MOVIE_DETAILS_IN_PROGRESS'
export const loadMovieDetailsInProgress = () => ({
  type: LOAD_MOVIE_DETAILS_IN_PROGRESS
})

export const LOAD_MOVIE_DETAILS_SUCCESS = 'LOAD_MOVIE_DETAILS_SUCCESS'
export const loadMovieDetailsSuccess = movieDetails => ({
  type: LOAD_MOVIE_DETAILS_SUCCESS,
  payload: { movieDetails }
})

export const LOAD_MOVIE_DETAILS_FAILURE = 'LOAD_MOVIE_DETAILS_FAILURE'
export const loadMovieDetailsFailure = () => ({
  type: LOAD_MOVIE_DETAILS_FAILURE
})