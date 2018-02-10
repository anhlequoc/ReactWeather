const React = require('react');

var WeatherResult = React.createClass({
  displayWeather: function() {
    let weatherData = this.props.weatherData;
    console.log(weatherData);
    let city = this.props.city;
    return (
      <div>
        <p>Your city: {city}</p>
        <p>Your current temperature: {weatherData.temp}</p>
        <p>Min temperature: {weatherData.temp_min}</p>
        <p>Max temperature: {weatherData.temp_max}</p>
        <p>Humidity: {weatherData.humidity}</p>
        <p>Pressure: {weatherData.pressure}</p>
      </div>
    ); 
  },
  defaultDisplay: function() {
    return (
      <div>
        <p>no city</p>
      </div>
    );
  },
  render: function() {
    let weatherData = this.props.weatherData;
    console.log(weatherData);
    let city = this.props.city;
    if (weatherData !== undefined) {
      this.displayWeather();
    } else {
      this.defaultDisplay();
    }
    return (
      <div>
        <p>hello</p>
      </div>
    );
  }
});

module.exports = WeatherResult;