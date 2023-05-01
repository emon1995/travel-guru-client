import React from "react";
import "./Travel.css";
import { Link, useLoaderData } from "react-router-dom";

const Travel = () => {
  const travel = useLoaderData();
  console.log(travel);
  return (
    <div className="travel">
      <div className="travel-info">
        <h1 className="carousel-title">{travel.title}</h1>
        <p className="carousel-subtitle">{travel.description}</p>
      </div>
      <div className="travel-details">
        <label htmlFor="origin">Origin</label>
        <input type="text" name="origin" id="" />
        <br />
        <label htmlFor="destination">Destination</label>
        <input type="text" name="destination" id="" />
        <div className="travel-to">
          <div>
            <label htmlFor="form">Form</label>
            <br />
            <input type="date" name="form" id="field" />
          </div>
          <div>
            <label htmlFor="to">To</label>
            <br />
            <input type="date" name="to" id="field" />
          </div>
        </div>
        <Link to={`/blog`}>
          <button className="btn btn-start-booking">Start Booking</button>
        </Link>
      </div>
    </div>
  );
};

export default Travel;
