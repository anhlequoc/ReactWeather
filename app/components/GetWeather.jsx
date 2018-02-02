var React = require('react');

var GetWeather = React.createClass({
  render: function() {
    return (
      <div>
        Main Component
        <p display="none">The weather of city is... </p>
        <form>
          <input type="text" placeholder="Enter city" />
          <input type="submit" value="Get Weather!"/>
        </form>
      </div>
    );
  }
});

module.exports = GetWeather;