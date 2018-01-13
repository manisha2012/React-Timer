var React = require('react');  // already installed via npm in package.json
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Countdown = require('Countdown');
var Timer = require('Timer');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// React DOM method : render which is rendering react component
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="countdown" component={Countdown}/>
			<IndexRoute component={Timer}/>
		</Route>
	</Router>,
	document.getElementById('app')
);

// 'history' prop tells that we're going to use # (in http://localhost:3000/#/examples?_k=iwa4x7) followed by path in order to maintain routes for our app
