import React from 'react'
import { Link } from 'react-router-dom'
import noImage from '../images/noImage.png'

const MovieCard = ({ title }) => {
  // let image = new Image()
  // let image_url = `/images/${title}.jpg`
  // image.src = image_url
  // image_url = image.width === 0 ? noImage : image_url

  return (
    <div className="column">
      <div className="image">
        <Link to={`/movie/${title}`}>
          <img className="ui medium bordered image movie-image" src={noImage} alt="movies" />
        </Link>
      </div>
      <Link to={`/movie/${title}`} className="card-link1">
        <div className="extra">
          { title }
        </div>
      </Link>
    </div>
  )
}

export default MovieCard