import React from 'react'
import ReactLogo from './logo.svg';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () =>  <img src={ReactLogo} alt="React Logo"  className='images'/>
const Map = ({location}) => {
  
console.log(location)

  return (
    <div className='map'>
<GoogleMapReact
          
          defaultCenter={{ lat: location?.lat|| 52.21265085809569,
          lng: location?.lng||20.955689698316995}}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={location?.lat|| 52.21265085809569}
            lng={location?.lng||20.955689698316995}
          
          />
        </GoogleMapReact>

  </div>
  )
}

export default Map
