"use strict";

var React = require('react');
var Router = require('react-router');
var Toaster = require('toastr');

var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');

var ManageAuthorPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    getInitialState: function() {
        return {
            author: { id: '', firstName: '', lastName: '' },
            errors: {}
        };
    },

    setAuthorState: function(event) {
        var field = event.target.name;
        var value = event.target.value;

        this.state.author[field] = value;
        return this.setState({ author: this.state.author });
    },

    authorFormIsValid: function() {
        var formIsValid = true;

        // Clear any previous errors
        this.state.errors = {};

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'First Name must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'Last Name must be at least 3 characters.';
            formIsValid = false;
        }

        this.setState({ errors: this.state.errors });

        return formIsValid;
    },

    saveAuthor: function(event) {
        event.preventDefault();

        if (!this.authorFormIsValid()) {
            return;
        }

        AuthorApi.saveAuthor(this.state.author);
        Toaster.success('New author saved!');
        this.transitionTo('authors');
    },

    render: function() {
        return (
            <div className="container-fluid">
                <h1>Manage Author</h1>
                <AuthorForm 
                    author = { this.state.author }
                    onChange = { this.setAuthorState }
                    onSave = { this.saveAuthor } 
                    errors = { this.state.errors } >
                </AuthorForm>
            </div>
        );
    }
});

module.exports = ManageAuthorPage;