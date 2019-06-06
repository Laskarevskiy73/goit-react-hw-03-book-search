import React from 'react';
import PropTypes from 'prop-types';
import style from './css/BookListItem.module.css';

const BookListItem = ({
  image,
  rating,
  pageCount,
  title,
  description,
  author,
  publisher,
  publishedDate,
  alt,
}) => {
  return (
    <>
      <div className={style.containerImage}>
        <img className={style.image} src={image} alt={alt} />
        <span>Rating: {rating}/5</span>
        <span>Page Count: {pageCount}</span>
      </div>
      <div className={style.containerDescription}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
        <p className={style.author}>{author}</p>
        <div className={style.containerPublisher}>
          <p className={style.publisher}>{publisher}</p>
          <span className={style.publishedDate}>{publishedDate}</span>
        </div>
      </div>
    </>
  );
};

BookListItem.defaultProps = {
  alt: 'pictures for the book',
};

BookListItem.propTypes = {
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.arrayOf(PropTypes.string).isRequired,
  publisher: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default BookListItem;
