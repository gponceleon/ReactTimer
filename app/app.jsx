const React = require("react");
const ReactDOM = require("react-dom");
const { Route, Router, IndexRoute, hashHistory } = require("react-router");
const Main = require('Main');
const Timer=require('Timer');
const Countdown=require('Countdown');

// load Foundation
//require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//load styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
<Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="countdown" component={Countdown}/>
        <IndexRoute component={Timer}/>
    </Route>
</Router>, 
document.getElementById("app"));

//webpack -w se queda escuchando cambios
