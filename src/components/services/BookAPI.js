import axios from 'axios';

/* eslint-disable-next-line */
export const getBookByQuery = (query = 'react', genre = 'computers') =>
  axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${query}+subject:${genre}`,
  );
