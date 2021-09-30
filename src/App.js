import React, { useState } from "react";
import "./styles.css";

var ott = {
  Netflix: [
    { name: "DARK", rating: "8.8/10" },
    { name: "Money heist", rating: "8.3/10" },
    { name: "Stranger Things", rating: "8.7/10" },
    { name: "Breaking Bad", rating: "8.8/10" },
    { name: "Narcos", rating: "8.8/10" },
    { name: "Sex Education", rating: "8.5/10" },
    { name: "Daredevil", rating: "8.6/10" },
    { name: "Our Planet", rating: "9.3/10" },
    { name: "Peaky Blinders", rating: "8.8/10" }
  ],
  "Amazon Prime": [
    { name: "The Office", rating: "8.9/10" },
    { name: "Seinfeld", rating: "8.8/10" },
    { name: "Dexter", rating: "8.6/10" },
    { name: "Mad Men", rating: "8.6/10" },
    { name: "Suits", rating: "8.5/10" },
    { name: "Mirzapur", rating: "9/10" },
    { name: "Paatalok", rating: "7/10" },
    { name: "The Boys", rating: "8.4/10" },
    { name: "The Big Bang Theory", rating: "8.1/10" }
  ],
  Hotstar: [
    { name: "Wanda Vision", rating: "8.8/10" },
    { name: "Falcon & winter Soldier", rating: "8.4/10" },
    { name: "Agents of Shield", rating: "8.2/10" },
    { name: "Criminal Justice", rating: "7.5/10" },
    { name: "Silicon Valley", rating: "8.6/10" },
    { name: "Special Opps", rating: "7/10" },
    { name: "Aarya", rating: "6.5/10" },
    { name: "Hostages", rating: "6.8/10" },
    { name: "Grey's Anatomy", rating: "7.9/10" }
  ]
};

var arrayOfOtt = Object.keys(ott); //Conversting Object to array so that we can use it in map function
export default function App() {
  var [selectedOtt, setSelectedOtt] = useState("Netflix");

  function ottClickHandler(ottNameReceived) {
    selectedOtt = ottNameReceived;
    setSelectedOtt(selectedOtt);
  }

  //View
  return (
    <div className="App">
      <h1>Lets Binge watch</h1>
      <h4>Top 10 Web series on</h4>
      <div>
        {arrayOfOtt.map((ottName) => {
          return (
            <button key={ottName} onClick={() => ottClickHandler(ottName)}>
              {ottName}
            </button>
          );
        })}
      </div>

      <div>
        {ott[selectedOtt].map((movieList) => {
          return (
            <ul>
              <li>{movieList.name}</li>
              <li>{movieList.rating}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
