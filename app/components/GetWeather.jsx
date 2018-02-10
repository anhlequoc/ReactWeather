var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherResult = require('WeatherResult');
var apiWeather = require('apiWeather');

var GetWeather = React.createClass({
  getInitialState: function() {
    return {
      location: '',
      weatherData: undefined,
      isLoading: undefined
    }
  },
  searchWeather: function(location) {
    let that = this; // point to same object
    //reset State
    this.setState({
      location: '',
      weatherData: undefined,
      isLoading: true
    });

    apiWeather.getTemp(location)
      .then(function(weatherData) {
        that.setState({
          location: location,
          weatherData: weatherData,
          isLoading: false
        });
      })
      .catch(function(error) {
        that.setState({
          location: location,
          weatherData: {test: "test"},
          isLoading: false
        });
      });
  },
  render: function() {
    return (
      <div>
        Main Component
        <p display="none">The weather of city is... </p>
        <WeatherForm handleSearch={this.searchWeather}/>
        <WeatherResult weatherData={this.state.weatherData} city={this.state.location}/>
      </div>
    );
  }
});

module.exports = GetWeather;