import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalReactPackages: [],
    };
  }

  componentDidMount() {
    // Simple GET request using fetch
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=alameda&appid=5641904b9f9d3a2b1751db682fa354ff"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ totalReactPackages: data }));
  }

  render() {
    const { totalReactPackages } = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">Simple GET Request</h5>
        <div className="card-body">
          Total react packages: {(totalReactPackages.length, "\n")}
          <br />
          City: {totalReactPackages.name ? totalReactPackages.name : " "}
          <br />
          Temp: {totalReactPackages.main ? totalReactPackages.main.temp : " "}
          <br />
          Feels Like:{""}
          {totalReactPackages.main ? totalReactPackages.main.feels_like : " "}
          {console.log(totalReactPackages)}
        </div>
      </div>
    );
  }
}

export default App;
