import React from "react";
import "whatwg-fetch";
import "./App.css";
import TimeForm from "./TimeForm";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-routerdom";

const Home = () => (
  <div>
    <h1>Welcome home</h1>
    <Link to="/about">Go to about</Link>
  </div>
);
const About = ({ name }) => (
  <div>
    <h1>About {name}</h1>
  </div>
);
// ...
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/about"
            render={(renderProps) => (
              <div>
                <Link to="/about/ari">Ari</Link>
                <Link to="/about/nate">Nate</Link>
                <Route
                  path="/about/:name"
                  render={(renderProps) => (
                    <div>
                      <About name={renderProps.match.params.name} />
                      <Link to="/">Go home</Link>
                    </div>
                  )}
                />
              </div>
            )}
          />
          <Route
            path="/"
            render={(renderProps) => (
              <div>
                Home is underneath me
                <Home {...this.props} {...renderProps} />
              </div>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.fetchCurrentTime = this.fetchCurrentTime.bind(this);
//   //   this.handleFormSubmit = this.handleFormSubmit.bind(this);
//   //   this.handleChange = this.handleChange.bind(this);
//   //   this.state = {
//   //     currentTime: null,
//   //     msg: "now",
//   //   };
//   // }
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     currentTime: null,
//   //     msg: "now",
//   //     tz: "PST",
//   //   };
//   // }
//   // //
//   // methods we'll fill in shortly
//   // fetchCurrentTime() {
//   //   fetch(this.getApiUrl())
//   //     .then((resp) => resp.json())
//   //     .then((resp) => {
//   //       const currentTime = resp.dateString;
//   //       this.setState({ currentTime });
//   //     });
//   // }
//   // getApiUrl() {
//   //   const { tz, msg } = this.state;
//   //   const host = "https://andthetimeis.com";
//   //   return host + "/" + tz + "/" + msg + ".json";
//   // }
//   // //
//   // handleFormSubmit(evt) {
//   //   this.fetchCurrentTime();
//   // }

//   // handleChange(newState) {
//   //   this.setState(newState);
//   // }

//   render() {
//     // const { currentTime, tz } = this.state;
//     // const apiUrl = this.getApiUrl();
//     return (
//       // <div>
//       //   {!currentTime && (
//       //     <button onClick={this.fetchCurrentTime}>Get the current time</button>
//       //   )}
//       //   {currentTime && <div>The current time is: {currentTime}</div>}
//       //   <TimeForm
//       //     onFormSubmit={this.handleFormSubmit}
//       //     onFormChange={this.handleChange}
//       //     tz={tz}
//       //     msg={"now"}
//       //   />
//       //   <p>
//       //     We'll be making a request from: <code>{apiUrl}</code>
//       //   </p>
//       // </div>
//       <Router>
//         <Switch>
//           <Route path="/about" component={About} />
//           <Route path="/" component={Home} />
//         </Switch>
//       </Router>
//     );
//   }
// }
export default App;
