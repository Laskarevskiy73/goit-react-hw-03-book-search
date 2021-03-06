import React, { Component } from 'react';
import Loader from 'react-spinkit';
import { NotificationContainer } from 'react-notifications';
import createNotification from './Notifications';
import SearchForm from './SearchForm';
import BookList from './BookList';
import genres from './genres.json';
import * as BookAPI from '../services/BookAPI';
import style from './css/PageSearchBook.module.css';
import 'react-notifications/lib/notifications.css';
import mapper from './mapper';

export default class PageSearchBook extends Component {
  state = {
    books: '',
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    BookAPI.getBookByQuery()
      .then(({ data: { items } }) => this.setState({ books: mapper(items) }))
      .catch(error => createNotification('error', '', error))
      .finally(() => this.setState({ loading: false }));
  }

  handleSubmit = ({ genre, query }) => {
    this.setState({ loading: true, books: 0 });

    BookAPI.getBookByQuery(query, genre)
      .then(({ data: { items } }) => {
        this.setState({ books: mapper(items) });
        createNotification('success', genre);
      })
      .catch(error => createNotification('error', genre, error))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { books, loading } = this.state;

    return (
      <>
        <div className={style.main}>
          {loading && (
            <Loader
              className={style.loader}
              name="double-ball-scale-multiple"
            />
          )}
        </div>
        <SearchForm genres={genres} onSubmit={this.handleSubmit} />
        {books.length > 0 && <BookList items={books} />}
        <NotificationContainer />
      </>
    );
  }
}
