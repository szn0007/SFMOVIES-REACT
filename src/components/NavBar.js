import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUniqueMovies } from '../selectors'

const NavBar = ({ movies }) => {
  const [inputValue, setInputValue] = useState('')
  const [filteredMovies, setFilteredMovies] = useState([])

  const onInputChange = (event) => {
    // console.log(event.target.value)
    setInputValue(event.target.value)
    let userInput = event.target.value
    const filteredMovies = movies.filter(movie => movie.toLowerCase().indexOf(userInput.toLowerCase()) > -1)
    setFilteredMovies(filteredMovies)

    if (userInput.trim().length === 0) {
      setFilteredMovies([])
    }
  }

  const onInputClick = (e) => {
    setInputValue('')
    setFilteredMovies([])
    // console.log(e.currentTarget.innerText)
  }

  const result = filteredMovies.length > 0 ? (
    <div className="result">
      <ul>
        {
          filteredMovies.map((movie, index) => (
          <Link to={`/movie/${movie}`} className="menu-item-link" key={index}>
            <li onClick={onInputClick}>
              {movie}
            </li>
          </Link>
          ))
        }
      </ul>
    </div>
  ) : ''

  const icon = inputValue.length > 0 ? 'close icon' : 'search icon'

  const onIconClick = () => {
    if (icon === 'close icon') {
      setInputValue('')
      setFilteredMovies([])
    }
  }

  return (
    <>
      <div className="ui attached menu">
        <div className="ui container">
          <div className="item">
            SFMOVIES
          </div>
          <Link to="/" className="item">
            <i className="home icon"></i> Home
          </Link>

          <div className="right item">
            <div className="ui search">
              <div className="ui icon input">
                <input className="prompt" type="text" placeholder="Search Movies..."
                value={inputValue}
                onChange={onInputChange}
                />
                <span onClick={onIconClick} className="span-icon">
                  <i className={icon}></i>
                </span>
              </div>
              {result}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  movies: getUniqueMovies(state)
})

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)