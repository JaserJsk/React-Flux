"use strict";

var React = require('react');

var About = React.createClass({ 
    statics: {
        willTransitionTo: function(transition, params, query, callback) {
            if (!confirm('Are you sure that you want to continue?')) {
                transition.about();
            }
            else {
                callback();
            }
        },

        willTransitionFrom: function(transition, component) {
            if (!confirm('Are you sure that you want to leave?')) {
                transition.about();
            }
        }
    },
    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>This application usses the following technologies</p>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Flux</li>
                    <li>Node</li>
                    <li>Gulp</li>
                    <li>Browserify</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        );
    }
 });

 module.exports = About;