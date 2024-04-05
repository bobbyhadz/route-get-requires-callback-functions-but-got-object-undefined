import express from 'express';
import {
  listBooks,
  createBook,
} from '../controllers/books-controller.js';

const router = express.Router();

// Home page for this route
router.get('/', listBooks);

// Create book route
router.post('/', createBook);

export {router as booksRouter};
