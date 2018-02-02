var React = require('react');
var Nav = require('Nav');
// var GetWeather = require('GetWeather');
// var About = require('About');
// var Example = require('Example');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <h1>Main Component</h1>
        </div>
        <div>
          <Nav /> {/*gọi Nav ở đây vì không include vào Route con của Main*/}
          {this.props.children} {/*load all component con của Main, đc define trong Route*/}
        </div>
      </div>
    );
  }
});

module.exports = Main;