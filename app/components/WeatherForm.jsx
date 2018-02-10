const React = require('react');

var WeatherForm = React.createClass({  
  onFormSubmit: function(e) {
    e.preventDefault();    
    
    //update state and get temp by using api call
    let location = this.refs.location.value;
    if (location.length > 0) {            
      this.refs.location.value = "";
      this.props.handleSearch(location);
    } else {
      console.log('please enter location');
    }
  },  
  render: function() {
    return (
      <div>
        <div> Weather Form </div>
        <form onSubmit={this.onFormSubmit}>
            <input type="text" placeholder="Enter city" ref="location" />
            <input type="submit" value="Get Weather!"/>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;