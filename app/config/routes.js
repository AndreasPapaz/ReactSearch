var React = require('react');
var router = require('react-router');
var Route = router.Route;
var Router = router.Router;

var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

var Main = require('../components/Main');
var Search = require('../components/children/Search');
var Saved = require('../components/children/Saved');
var Panels = require('../components/children/Panels');

module.exports = (

	<Router history={hashHistory}>
        <Route path="/" component={Main}>

            <Route path="search" component={Search} />
            <Route path="saved" component={Saved} />

            {/* Show search by default */}
            <IndexRoute component={Panels} />
        </Route>
    </Router>
);