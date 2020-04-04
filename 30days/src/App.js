import React from 'react';
import Header from "./components/Header";
import Content from "./components/Content";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}


export default App;
