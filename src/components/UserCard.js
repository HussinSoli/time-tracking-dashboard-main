import React from "react";
import ".././styles/user.css";

export default function UserCard({
  img,
  name,
  onDaily = (f) => f,
  onWeekly = (f) => f,
  onMonthly = (f) => f,
}) {
  return (
    <div className="user-card">
      <div className="user-card--body">
        <img src={img} alt="" />
        <h1>
          <span>Report For </span>
          {name}
        </h1>
      </div>
      <button onClick={onDaily}>Daily</button>
      <button onClick={onWeekly}>Weekly</button>
      <button onClick={onMonthly}>Monthly</button>
    </div>
  );
}
