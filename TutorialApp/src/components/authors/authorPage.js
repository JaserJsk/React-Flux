"use strict";

var React = require('react');
var Router = require('react-router');

var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');

var Link = Router.Link;

var AuthorPage = React.createClass({ 
    getInitialState: function() {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },

    componentWillMount: function() {
        AuthorStore.addChangeListener(this._onChange);
    },

    // Clean up when this component is unmounted
    componentWillUnmount: function() {
        AuthorStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState({ authors: AuthorStore.getAllAuthors() });
    },

    render: function() {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors = { this.state.authors } />

                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
            </div>
        );
    }
 });

 module.exports = AuthorPage;