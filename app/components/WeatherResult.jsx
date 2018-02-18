const React = require('react');

var WeatherResult = React.createClass({
  render: function() {
    console.log(this.props.weatherData);
    let city = (this.props.city !== undefined) ? this.props.city : 'city';
    let temp = (this.props.weatherData !== undefined) ? this.props.weatherData.temp : 'temp';
    let temp_min = (this.props.weatherData !== undefined ) ? this.props.weatherData.temp_min : 'temp_min';
    let temp_max = (this.props.weatherData !== undefined ) ? this.props.weatherData.temp_max : 'temp_max';
    let humidity = (this.props.weatherData !== undefined ) ? this.props.weatherData.humidity : 'humidity';
    let pressure = (this.props.weatherData !== undefined ) ? this.props.weatherData.pressure : 'pressure';

    // let weatherData = (this.props.weatherData !== undefined) ? this.props.weatherData : {};

    let weatherData = this.props.weatherData;

    function weatherHasNoData() {
      console.log("call nodata");
      if (weatherData !== undefined && weatherData.cod === "404") {
        return (
          <div>
            <p>Your city: {city}</p>
            <p>Message: Status Code: {weatherData.cod}, message: {weatherData.message} </p>
          </div>
        )
      }
    }

    function weatherHasData() {
      console.log("call data");
      if (weatherData === undefined || weatherData.code !== "404" ){
        return (
          <div>
              <p>Your city: {city}</p>
              <p>Your current temperature: {temp}</p>
              <p>Min temperature: {temp_min}</p>
              <p>Max temperature: {temp_max}</p>
              <p>Humidity: {humidity}</p>
              <p>Pressure: {pressure}</p>
          </div>
        );
      }     
    }
    return (
      <div>
        {weatherHasData()}
        {weatherHasNoData()}
      </div>
    );
  }
});

module.exports = WeatherResult;