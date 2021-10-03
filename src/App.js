import React, { Component } from "react";
import "./weatherstyling.css";
import { Weather } from "./components/weather/weather-component";
import sun from "./images/sun.png";
import cloud from "./images/Cloud.png";
import rain from "./images/Rain.png";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalReactPackages: [],
      cityinput: " ",
    };
  }

  // How to do Dupes cities
  // Add The Degree Fairenheight
  //

  componentDidMount(props) {
    // Simple GET request using fetch
    // fetch(
    //   "https://api.openweathermap.org/data/2.5/weather?q=alameda&appid=5641904b9f9d3a2b1751db682fa354ff&units=imperial"
    // )
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ totalReactPackages: data }));
  }

  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({ cityinput: event.target.value });
  };
  handleSubmit = (event) => {
    console.log("In the function");
    console.log(event.target.value);
    console.log(this.state.cityinput);
    this.searchForTheWeather();
    //this.setState({ cityInput: event.target.value });
  };

  determineImage = (description) => {
    description = description.toLocaleLowerCase();
    if (description == "") {
      return;
    } else if (description == "clear") {
      console.log("Sun Image");
      return <img src={sun} alt="sun" />;
    } else if (description == "cloudy" || description == "clouds") {
      console.log("Cloud Image");
      return <img src={cloud} alt="cloud" />;
    } else if (description == "rainy" || description == "rain") {
      // rain.png
      console.log("Rain Image");
      return <img src={rain} alt="rain" />;
    } else {
      console.log("Unsure on Image");
      return <img src={sun} alt="unsureOnImage" />;
      // return sun
    }
  }; // End Function

  searchForTheWeather = () => {
    var APPID = this.state.cityinput;

    if (APPID == " ") {
      APPID = "Alameda";
    }

    APPID = APPID.toLocaleLowerCase();
    console.log(this.state.cityinput);
    var weather_url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      APPID +
      "&appid=5641904b9f9d3a2b1751db682fa354ff&units=imperial";

    fetch(weather_url)
      .then((response) => response.json())
      .then((data) => this.setState({ totalReactPackages: data }));
  }; // End SEarch for the weather

  render() {
    const { totalReactPackages } = this.state;
    return (
      <div className="card text-center m-3">
        <div className="weatherStyle weather">
          <div className="border">
            <h1> Not your Average Weather App</h1>
            <label htmlFor="WeatherInput"> City </label>
            <input
              id="WeatherInput"
              type="text"
              placeholder="Alameda "
              onChange={this.handleChange}
            />
            <button value onClick={this.handleSubmit}>
              Search
            </button>
            <h5 className="card-header">Daily Weather</h5>
            <Weather fieldName="City" fieldValue={totalReactPackages.name}>
              {" "}
            </Weather>
            <Weather
              fieldName="Temp"
              fieldValue={
                totalReactPackages.main
                  ? totalReactPackages.main.temp + " °F"
                  : ""
              }
            />
            <Weather
              fieldName="Feels Like"
              fieldValue={
                totalReactPackages.main
                  ? totalReactPackages.main.feels_like + " °F"
                  : " "
              }
            />

            <Weather
              fieldName="Description"
              fieldValue={
                totalReactPackages.main
                  ? totalReactPackages.weather[0].main
                  : " "
              }
              fieldImage={this.determineImage(
                totalReactPackages.main
                  ? totalReactPackages.weather[0].main
                  : ""
              )}
            />
          </div>{" "}
          {/*End before Weather Div */}
        </div>{" "}
        {/*End Weather Div */}
      </div>
    );
  }
}

export default App;
