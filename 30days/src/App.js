import React from 'react';
// import Header from "./components/Header";
// import Content from "./components/Content";

const a = [1, 10, 100, 1000, 10000];
const App = props => {
  return (
    <ul>
      {a.map(i => {
        return <li key={i}>{i}</li>;
      })}
    </ul>
  );
};
export default App;