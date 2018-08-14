"use strict";

var React = require('react');

var Home = React.createClass({ 
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Tutorial App</h1>
                <p>This "Tutorial App" is done by following the tutorial made by "Cory House" at Pluralsight</p>
            </div>
        );
    }
 });

 module.exports = Home;