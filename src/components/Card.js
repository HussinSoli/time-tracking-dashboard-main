import React from "react";
import "../styles/card.css";

export default function Card({
  data,
  day = true,
  week = false,
  month = false,
  imgDots,
}) {
  const backgroundClassName = data.name.replace(/\s/g, "");
  console.log(backgroundClassName);
  if (month) {
    return (
      <div className={`card card${backgroundClassName}`}>
        <div className="card--body">
          <div className="card--header">
            <h2>{data.name}</h2>
            <img src={imgDots} alt="" />
          </div>
          <p className="time--diplay">{data.monthly.current}hrs</p>
          <p className="previous-time--display">
            Last Month - {data.monthly.previous}hrs
          </p>
        </div>
      </div>
    );
  } else if (week) {
    return (
      <div className={`card card${backgroundClassName}`}>
        <div className="card--body">
          <div className="card--header">
            <h2>{data.name}</h2>
            <img src={imgDots} alt="" />
          </div>
          <p className="time--diplay">{data.weekly.current}hrs</p>
          <p className="previous-time--display">
            Last Week - {data.weekly.previous}hrs
          </p>
        </div>
      </div>
    );
  } else if (day) {
    return (
      <div className={`card card${backgroundClassName}`}>
        <div className="card--body">
          <div className="card--header">
            <h2>{data.name}</h2>
            <img src={imgDots} alt="" />
          </div>
          <p className="time--diplay">{data.daily.current}hrs</p>
          <p className="previous-time--display">
            Last Day - {data.daily.previous}hrs
          </p>
        </div>
      </div>
    );
  }
}
