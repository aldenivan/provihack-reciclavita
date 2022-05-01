import React, { useEffect, useState, Component } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

// const ScriptLoaded =
//   require("@react-google-maps/api/src/docs/ScriptLoaded").default;

const containerStyle = {
  width: "100%",
  height: "575px",
};

let center = {};

navigator.geolocation.getCurrentPosition(function (position) {
  center["lat"] = position.coords.latitude;
  center["lng"] = position.coords.longitude;
});

function MyComponent() {
  const [currentPosition, setCurrentPosition] = useState({});

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

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };
  return (
    // <ScriptLoaded>
    <LoadScript googleMapsApiKey="AIzaSyBdEBEyzNny2A7V4RlyyPpuFoHaZXnZThw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPosition}
        zoom={13}
      >
        {currentPosition.lat ? (
          <Marker
            onLoad={onLoad}
            position={currentPosition}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true}
          />
        ) : null}

        {/* <Autocomplete
            onLoad={this.onLoad}
            onPlaceChanged={this.onPlaceChanged}
          >
            <input
              type="text"
              placeholder="Customized your placeholder"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px",
              }}
            />
          </Autocomplete> */}
      </GoogleMap>
    </LoadScript>
    // </ScriptLoaded>
  );
}

export default React.memo(MyComponent);
