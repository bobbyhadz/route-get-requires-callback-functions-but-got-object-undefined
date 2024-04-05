import express from 'express';
import {booksRouter} from './routes/books.js';

const app = express();

app.use('/books', booksRouter);

app.listen(5000, function () {
  console.log('Server listening on port 5000');
});
