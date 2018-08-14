"use strict";

var React = require('react');

var AuthorList = React.createClass({ 
    propTypes: {
        authors: React.PropTypes.array.isRequierd
    },

    render: function() {
        var createAuthorRow = function(author) {
            return (
                <tr key = {author.id} >
                    <td>
                        <a href={"/#authors" + author.id}>
                            {author.id}
                        </a>
                    </td>
                    <td>
                        {author.firstName} {author.lastName} 
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