const React = require('react');

var WeatherResult = React.createClass({
  render: function() {
    let city = (this.props.city !== undefined) ? this.props.city : 'city';
    let weatherData = (this.props.weatherData !== undefined) ? this.props.weatherData : {};

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
  }
});

module.exports = WeatherResult;