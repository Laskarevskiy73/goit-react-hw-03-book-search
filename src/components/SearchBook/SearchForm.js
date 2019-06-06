import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import style from './css/SearchForm.module.css';

export default class SearchForm extends Component {
  state = {
    genre: '',
    query: '',
  };

  static propTypes = {
    genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  handleChangeSelect = ({ target }) => {
    this.setState({ genre: target.value });
  };

  handleChangeFieldSearch = ({ target }) => {
    this.setState({ query: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.resetStateFields();
  };

  resetStateFields = () => {
    this.setState({ genre: '', query: '' });
  };

  render() {
    const { genre, query } = this.state;
    const { genres } = this.props;

    return (
      <form className={style.container} onSubmit={this.handleSubmit}>
        <input
          className={style.input}
          onChange={this.handleChangeFieldSearch}
          value={query}
        />
        <select
          className={style.select}
          onChange={this.handleChangeSelect}
          value={genre}
        >
          {genres.map(item => (
            <option key={shortid.generate()} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button
          className={style.search}
          onClick={this.handleSubmit}
          type="submit"
        >
          Search
        </button>
      </form>
    );
  }
}
