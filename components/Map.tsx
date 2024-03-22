import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { Listing } from "@/public/utils/ApiTypes";
import "mapbox-gl/dist/mapbox-gl.css";

type Props = {
  searchResults: Listing[];
};

const Map = ({ searchResults }: Props) => {
  const coordinates = searchResults.map((result) => ({
    latitude: result.listing.coordinate.latitude,
    longitude: result.listing.coordinate.longitude,
  }));

  const center = getCenter(coordinates) || { latitude: 0, longitude: 0 }; // Fallback center if `getCenter` returns false

  const [selectedLocation, setSelectedLocation] = useState<Listing | null>(
    null
  );
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  console.log("selectedLocation", selectedLocation);
  return (
    <ReactMapGL
      reuseMaps
      {...viewport}
      mapStyle={process.env.NEXT_PUBLIC_MAP_BOX_STYLE_URL}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN}
      onMove={(evt) =>
        setViewport((currentState) => ({
          ...currentState,
          ...evt.viewState,
        }))
      }
    >
      {searchResults.map((result) => (
        <div key={result.id}>
          <Marker
            longitude={result.listing.coordinate.longitude as number}
            latitude={result.listing.coordinate.latitude as number}
            onClick={() => {
              setSelectedLocation(result);
            }}
          >
            <p
              role="img"
              aria-label="push-pin"
              className="cursor-pointer text-2xl animate-bounce "
            >
              📌
            </p>
          </Marker>
          {selectedLocation?.id === result.id && (
            <Popup
              closeOnClick={false}
              onClose={() => {
                console.log("onClose");
                setSelectedLocation(null);
              }}
              latitude={result.listing.coordinate.latitude as number}
              longitude={result.listing.coordinate.longitude as number}
            >
              {result.listing.title}
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
