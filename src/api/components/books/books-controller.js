const booksService = require('./books-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getBooks(request, response, next) {
  try {
    const { limit = 0, offset = 0 } = request.query;

    const books = await booksService.getBooks({ limit, offset });

    // Return the books
    return response.status(200).json(books);
  } catch (error) {
    return next(error);
  }
}


async function createBook(request, response, next) {
  try {
    const { title } = request.body;

    if (!title) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Title is required');
    }

    const book = await booksService.create(title);

    return response.status(200).json(book);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getBooks,
  createBook,
};
