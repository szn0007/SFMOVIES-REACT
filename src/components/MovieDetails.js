import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadMovieDetails } from '../thunks'
import { getMoviesLoading, getMovieDetails, getMovieLocations } from '../selectors'
import MapComponent from "./MapComponent"
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAsVqGaG2rtDG3k8Tuq_8bnqlNhh1adQwM");
Geocode.setRegion("us");

const MovieDetails = ({ match, getMovieDetailsDispatch, isLoading, movieDetails, movieLocations }) => {
  const title = match.params.title

  // console.log(movieDetails)
  // console.log(movieLocations)

  const [locations, setLocations] = useState([])
  const [selectedCoordinates, setSselectedCoordinates] = useState([])

  useEffect(() => {
    getMovieDetailsDispatch(title)
  }, [getMovieDetailsDispatch, title])

  useEffect(() => {
    let locations = [];
    movieLocations.map((a) => {
      Geocode.fromAddress(a.locations).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location
          locations.push({ latitude: lat, longitude: lng, location: a.locations })
          setLocations(locations)
          // console.log(locations)
        },
        error => {
          // console.error(error)
          return
        }
      );
      return null
    })
  }, [movieLocations])

  const loadingMessage = (
    <div className="ui active dimmer">
      <div className="ui text loader">Loading Movies Details</div>
    </div>
  )

  const onAddressClick = (location) => {
    const coordinates = locations.find(item => item.location === location)
    if (coordinates) {
      setSselectedCoordinates({ latitude: coordinates.latitude, longitude: coordinates.longitude })
    }
  }

  const content = (
    <div className="movie-details-container">
      {/* MAP */}

      <div className="google-map">
        <MapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAsVqGaG2rtDG3k8Tuq_8bnqlNhh1adQwM"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          locations={locations}
          selectedCoordinates={selectedCoordinates}
          movieTitle={title}
        />
      </div>

      {/* MOVIE DETAILS SIDE BAR */}
      <div className="movie-details">
        <div className="movie-poster">
          <img className="ui image" src={movieDetails.Poster} alt={movieDetails.Title}/>
        </div>

        <div className="movie-details-top">
          <h3 className="ui header">
            <i className="film icon"></i>
            <div className="content">
              {`${movieDetails.Title} (${movieDetails.Year})`}
            </div>
          </h3>
          <div className="meta">
            <span className="genre">Genre: {movieDetails.Genre}</span>
            <span className="genre">Runtime: {movieDetails.Runtime}</span>
          </div>
        </div>

        <div className="movie-details-main">
          <h3 className="ui top attached header">
            Plot
          </h3>
          <div className="ui attached segment">
            <p>{movieDetails.Plot}</p>
          </div>

          <h3 className="ui top attached header">
            Filming Locations
          </h3>
          <div className="ui attached segment">
            <div className="ui relaxed divided list">
              {
                movieLocations.length === 0 ? (
                  <div className="item" >
                    <i className="large map marker alternate middle aligned icon"></i>
                    <div className="content">
                      <span className="header">No Location Available For {movieDetails.Title}</span>
                    </div>
                  </div>
                ) :
                movieLocations.map((location, index) => (
                  <div className="item location-item" key={index} onClick={() => onAddressClick(location.locations)}>
                    <i className="large map marker alternate middle aligned icon"></i>
                    <div className="content">
                      <span className="header">{location.locations}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div> 

      </div>
    </div>
  )
  return isLoading ? loadingMessage : content

}

const mapStateToProps = (state, ownProps) => ({
  isLoading: getMoviesLoading(state),
  movieDetails: getMovieDetails(state),
  movieLocations: getMovieLocations(state, ownProps.match.params.title)
})

const mapDispatchToProps = dispatch => ({
  getMovieDetailsDispatch: title => dispatch(loadMovieDetails(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)