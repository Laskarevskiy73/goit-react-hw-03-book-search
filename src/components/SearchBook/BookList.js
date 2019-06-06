import React from 'react';
import PropTypes from 'prop-types';
import BookListItem from './BookListItem';
import style from './css/BookList.module.css';

const BookList = ({ items }) => (
  <ul className={style.list}>
    {items.map(item => (
      <li className={style.listItem} key={item.id} id={item.id}>
        <BookListItem
          title={item.title}
          image={item.image}
          rating={item.rating}
          pageCount={item.pageCount}
          description={item.description}
          author={item.author}
          publisher={item.publisher}
          publishedDate={item.publishedDate}
        />
      </li>
    ))}
  </ul>
);

BookList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      pageCount: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      author: PropTypes.arrayOf(PropTypes.string).isRequired,
      publisher: PropTypes.string.isRequired,
      publishedDate: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default BookList;
