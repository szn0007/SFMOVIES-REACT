import React, { useState, useEffect } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MapComponent = withScriptjs(withGoogleMap((props) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [defaultCenter, setdefaultCenter] = useState({
    lat: 37.7749,
    lng: -122.4194
  });
  const [defaultZoom, setdefaultZoom] = useState(10);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (props.locations.length > 0) {
      setdefaultZoom(16);
      setdefaultCenter({ lat: props.locations[0].latitude, lng: props.locations[0].longitude })
      setMarkers(createMarkers(props.locations))
    }
  }, [props.locations]);

useEffect(() => {
  if (props.selectedCoordinates && Object.keys(props.selectedCoordinates).length > 0) {
    setdefaultZoom(17);
    setdefaultCenter({ lat: props.selectedCoordinates.latitude, lng: props.selectedCoordinates.longitude })
  }
}, [props.selectedCoordinates])

  function createMarkers(position){
    let marks = []
    for(let i = 0; i < position.length; i++){
        marks.push(<Marker
          key={i}
          position={{ lat: position[i].latitude,
            lng: position[i].longitude }}
          onClick = {() => {
            setSelectedLocation(position[i]);
          }}
        />)
    }
    return marks;
  } 

  return (
    <GoogleMap
      zoom={defaultZoom}
      center={defaultCenter}
    >
      { props.locations.length > 0 && createMarkers(props.locations) }

      {selectedLocation && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedLocation(null);
          }}
          position={{
            lat: selectedLocation.latitude,
            lng: selectedLocation.longitude
          }}
        >
          <div>
            <h5>Movie: {props.movieTitle} </h5>
            <p>Location: {selectedLocation.location} </p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}))

export default MapComponent