import React from "react";
import "./Destination.css";
import { Map, Marker } from "pigeon-maps";

const Destination = () => {
  return (
    <div className="destination">
      <Map height={500} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
        <Marker width={50} anchor={[50.879, 4.6997]} />
      </Map>
    </div>
  );
};

export default Destination;
