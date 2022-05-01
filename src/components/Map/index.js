import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";

import {
  GoogleMap,
  StandaloneSearchBox,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const readPlace = (places) => {
  places.map((p) => console.log(p));
};

const containerStyle = {
  width: "100%",
  height: "575px",
};

const lib = ["places"];

let places = [];

let center = {};

navigator.geolocation.getCurrentPosition(function (position) {
  center["lat"] = position.coords.latitude;
  center["lng"] = position.coords.longitude;
});

function MyComponent() {
  const [searchBox, setSearchBox] = useState(null);
  const [currentPosition, setCurrentPosition] = useState({});

  const onPlacesChanged = () => {
    places.push(searchBox.getPlaces());
    readPlace(places);
  };
  const onSBLoad = (ref) => {
    setSearchBox(ref);
  };

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng });
  };

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBdEBEyzNny2A7V4RlyyPpuFoHaZXnZThw"
      libraries={lib}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {currentPosition.lat ? (
          <Marker
            onLoad={onSBLoad}
            position={currentPosition}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true}
          />
        ) : null}
        <>
          <StandaloneSearchBox
            onPlacesChanged={onPlacesChanged}
            onLoad={onSBLoad}
          >
            <input
              type="text"
              placeholder="Procure aqui onde descartar seu lixo"
              style={{
                boxSizing: "border-box",
                border: `1px solid transparent`,
                width: `270px`,
                height: `40px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                margin: "center",
                textOverflow: `ellipses`,
                position: "absolute",
                top: "40px",
                marginLeft: "50%",
              }}
            />
          </StandaloneSearchBox>
        </>
      </GoogleMap>
    </LoadScript>
  );
}

export default MyComponent;
