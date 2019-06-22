import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white',
    background: 'red',
    padding: '10px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)',
  }}
  >
    {text}
  </div>
);

const Map = () => {
  const props = {
    center: {
      lat: 49.42,
      lng: 1.08,
    },
    zoom: 14,
  };

  const { center, zoom } = props;

  return (
    // Important! Toujours définir explicitement la hauteur de la div qui contient la map
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        className="map"
        bootstrapURLKeys={{ key: 'AIzaSyAWaav8QxFAU9PrE8WM7JYjhlJDSZo1TEc' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent
          lat={49.428527}
          lng={1.082251}
          className="place"
          text="Pixel Café"
        />
      </GoogleMapReact>
    </div>
  );
};


AnyReactComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

Map.propTypes = {
  zoom: PropTypes.number.isRequired,
  center: PropTypes.object.isRequired,
};

export default Map;
