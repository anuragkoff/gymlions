import React, {useState} from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

export default function MapComponent({lat, lng}) {
  const [selected, setSelected] = useState(null);

    const mapStyles = {
        height: "100vh",
        width: "100%"
      };
    
      const defaultCenter = {
        lat: lat,
        lng: lng
      };
  return (
    <div className='mapComponentAll'>
      <LoadScript googleMapsApiKey="AIzaSyCoR19ouoMwwolp6fwmC4Kt1FSjHsz5-Yw">
        <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
        >
        <Marker 
          position={defaultCenter} 
          onClick={() => setSelected(defaultCenter)}
        />
        {selected && (
          <InfoWindow
            position={defaultCenter}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2>Location</h2>
              <p>Latitude: {lat}</p>
              <p>Longitude: {lng}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
    </div>
  )
}
