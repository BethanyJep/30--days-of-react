// import Header from "./components/Header";
// import Content from "./components/Content";
import React, { Component } from "react";
import "whatwg-fetch";

const a = [1, 10, 100, 1000, 10000];

const App = (props) => {
  return (
    <ul>
      {a.map((i) => {
        return <li key={i}>{i}</li>;
      })}
    </ul>
  );

  function getCurrentTime() {
    // Get the current 'global' time from an API using Promise
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        var didSucceed = Math.random() >= 0.5;
        didSucceed ? resolve(new Date()) : reject("Error");
      }, 2000);
    });
  }
  getCurrentTime()
    .then((currentTime) => getCurrentTime())
    .then((currentTime) => {
      console.log("The current time is: " + currentTime);
      return true;
    })
    .catch((err) => console.log("There was an error:" + err));
};
export default App;
