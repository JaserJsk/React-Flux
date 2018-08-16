/**
 * In a Unidirectional Flow - First Step - (authorList.js) will notify (authorActions.js)
 */

"use strict";

var React = require('react');
var Router = require('react-router');
var Toastr = require('toastr');

var AuthorActions = require('../../actions/authorActions');

var Link = Router.Link;

var AuthorList = React.createClass({ 
    propTypes: {
        authors: React.PropTypes.array.isRequierd
    },

    deleteAuthor: function(id, event) {
        event.preventDefault();

        //debugger;
        AuthorActions.deleteAuthor(id);
        Toastr.success('Author Deleted');
    },

    render: function() {
        var createAuthorRow = function(author) {
            return (
                <tr key = {author.id} >
                    <td>
                        <Link to = "manageAuthor" params = {{ id: author.id }}> {author.id} </Link>
                    </td>
                    <td>
                        {author.firstName} {author.lastName} 
                    </td>
                    <td>
                        <a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a>
                    </td>
                </tr>
            );
        };

        return (
            <div>
                <p>This is a list of all available authors</p>
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th></th>
                    </thead>
                   <tbody>
                       {this.props.authors.map(createAuthorRow, this)}
                   </tbody>
                </table>
            </div>
        );
    }
 });

 module.exports = AuthorList;