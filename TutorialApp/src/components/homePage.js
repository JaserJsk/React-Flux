"use strict";

var React = require('react');
var Router = require('react-router');

var Link = Router.Link;

var Home = React.createClass({ 
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Tutorial App</h1>
                <p>This "Tutorial App" is done by following the tutorial made by "Cory House" at Pluralsight</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
 });

 module.exports = Home;