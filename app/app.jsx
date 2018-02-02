var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var GetWeather = require('GetWeather');
var About = require('About');
var Example = require('Example');

// Load foundation
//require('style!css!foundation-sites/dist/css/foundation.min.css'); - remove this line after adding 'sassLoader' obj in webpack.config
$(document).foundation();
//load app/styles/app.css
require('style!css!sass!applicationStyles');{/*load alias applicationStyles in webpack.config by using style loader, css loader and sass loaders*/}

var App = React.createClass({
	render: function() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Main}>					
					<Route path="about" component={About} />
					<Route path="example" component={Example} />
					<IndexRoute component={GetWeather} />
				</Route>
			</Router>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
