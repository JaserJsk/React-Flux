/**
 * In a Unidirectional Flow - Second Step - (authorActions.js) will notify (authorStore.js)
 */

"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constents/actionTypes');
var AuthorApi = require('../api/authorApi');

var AuthorActions = {

    createAuthor: function(author) {
		var newAuthor = AuthorApi.saveAuthor(author);

		//Hey dispatcher, go tell all the stores that an author was just created.
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_AUTHOR,
			author: newAuthor
		});
	},

    updateAuthor: function(author) {
		var updatedAuthor = AuthorApi.saveAuthor(author);

		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_AUTHOR,
			author: updatedAuthor
		});
	},

	deleteAuthor: function(id) {

		//debugger;
		AuthorApi.deleteAuthor(id);

		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_AUTHOR,
			id: id
		});
	}

};

module.exports = AuthorActions;