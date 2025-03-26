const express = require('express');

const booksController = require('./books-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/books', route);

  // Get list of books
  route.get('/', booksController.getBooks);

  // Create a new book
  route.post('/', booksController.createBook);

  // TODO: Get a book by id
  route.get('/', booksController.getBook);

  // TODO: Update a book by id
  route.put('/', booksController)
  // TODO: Delete a book by id
};
