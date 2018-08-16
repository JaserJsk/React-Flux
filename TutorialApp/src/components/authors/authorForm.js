"use strict";

var React = require('react');

var Input = require('../common/reusables/textInput');

var AuthorForm = React.createClass({

    propTypes: {
        author: React.PropTypes.object.isRequired,
        onchange: React.PropTypes.func.isRequired,
        onsave: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function() {
        return (
            <form>
                <Input
                    name = "firstName"
                    label = "First Name"
                    value = { this.props.author.firstName }
                    onChange = { this.props.onChange } 
                    error = { this.props.errors.firstName } >
                </Input>
                <br />
                <Input
                    name = "lastName"
                    label = "Last Name"
                    value = { this.props.author.lastName }
                    onChange = { this.props.onChange } 
                    error = { this.props.errors.lastName } >
                </Input>

                <input type = "submit" 
                    value = "Save" 
                    className = "btn btn-primary"
                    onClick = { this.props.onSave } />
                
            </form>
        );
    }
});

module.exports = AuthorForm;