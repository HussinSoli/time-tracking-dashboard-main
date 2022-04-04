import "./App.css";
import React, { useState } from "react";
import Card from "./components/Card";
import UserCard from "./components/UserCard";
import imgUser from "./images/image-jeremy.png";
import imgDots from "./images/icon-ellipsis.svg";
import data from "./data/data.json";

function App() {
  const cards = [...data];
  const [timeDay, setTimeDay] = useState(false);
  const [timeWeek, setTimeWeek] = useState(true);
  const [timeMonth, setTimeMonth] = useState(false);
  return (
    <main>
      <UserCard
        img={imgUser}
        name="Jeremy Robson"
        onDaily={() => {
          setTimeDay(true);
          setTimeMonth(false);
          setTimeWeek(false);
        }}
        onWeekly={() => {
          setTimeDay(false);
          setTimeMonth(false);
          setTimeWeek(true);
        }}
        onMonthly={() => {
          setTimeDay(false);
          setTimeMonth(true);
          setTimeWeek(false);
        }}
      />
      <div className="container">
        {cards.map((card, i) => (
          <Card
            imgDots={imgDots}
            data={card}
            key={i}
            day={timeDay}
            week={timeWeek}
            month={timeMonth}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
