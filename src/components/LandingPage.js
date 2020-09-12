import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadMovies } from '../thunks'
import MovieCard from './MovieCard'
import { getUniqueMovies, getMoviesLoading } from '../selectors'

const containerStyle = {
  marginTop: '16px'
}

const LandingPage = ({ startLoadingMovies, isLoading, movies }) => {
  useEffect(() => {
    startLoadingMovies()
  }, [startLoadingMovies])
    const loadingMessage = (
      <div className="ui active dimmer">
        <div className="ui text loader">Loading Movies List</div>
      </div>
    )
    const content = (
      <div className="five column doubling ui grid container" style={containerStyle}>
        {
          movies.map(movie => (
            <MovieCard title={ movie } key={ movie }/>
          ))
        }
      </div>
    )
  return isLoading ? loadingMessage : content
}

const mapStateToProps = state => ({
  movies: getUniqueMovies(state),
  isLoading: getMoviesLoading(state)
})

const mapDispatchToProps = dispatch => ({
  startLoadingMovies: () => dispatch(loadMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)