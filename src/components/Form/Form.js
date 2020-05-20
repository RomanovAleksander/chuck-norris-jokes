import React from 'react';
import { connect } from 'react-redux';
import { ApiService } from '../../services';
import {
  jokeLoaded, jokeRequested, jokeError,
  jokesLoaded, jokesRequested, jokesError
} from '../../actions/jokes/actions';
import { FormSearch } from '../FormSearch';
import { FormCategories } from '../FormCategories';

import './form.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      category: 'dev',
      searchText: '',
      active: 'random'
    }
  }

  checkInput = (e) => {
    this.setState({
      active: e.target.id
    });
  };

  onSearchChange = searchText => {
    this.setState({ searchText });
  };

  onCategoryChange = category => {
    this.setState({ category });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      jokeLoaded, jokeRequested, jokeError,
      jokesLoaded, jokesRequested, jokesError
    } = this.props;
    const { active, category, searchText } = this.state;

    switch (active) {
      case 'random':
        jokeRequested();
        ApiService.get('/jokes/random')
          .then((data) => jokeLoaded(data))
          .catch((err) => {
            jokeError(err)
          });
        break;
      case 'category':
        jokeRequested();
        ApiService.get(`/jokes/random?category=${category}`)
          .then((data) => jokeLoaded(data))
          .catch((err) => {
            jokeError(err)
          });
        break;
      case 'search':
        jokesRequested();
        ApiService.get(`/jokes/search?query=${searchText}`)
          .then((data) => jokesLoaded(data))
          .catch((err) => {
            jokesError(err)
          });
        break;

      default:
        jokeRequested();
        ApiService.get('/jokes/random')
          .then((data) => jokeLoaded(data))
          .catch((err) => {
            jokeError(err)
          });
    }
  };

  render() {
    return (
      <form className="jokes-form" onSubmit={this.handleSubmit}>
        <div className="jokes-form__component">
          <input
            className="custom-checkbox"
            name="jokeType" id="random" type="radio" value="random"
            checked={this.state.active === "random"}
            onChange={this.checkInput} />
          <label htmlFor="random">Random</label>
        </div>
        <div className="jokes-form__component">
          <input
            className="custom-checkbox"
            name="jokeType" id="category" type="radio" value="category"
            checked={this.state.active === "category"}
            onChange={this.checkInput} />
          <label htmlFor="category">From categories </label>
          {this.state.active === "category" ? <FormCategories onCategoryChange={this.onCategoryChange} /> : null}
        </div>
        <div className="jokes-form__component">
          <input
            className="custom-checkbox"
            name="jokeType" id="search" type="radio" value="search"
            checked={this.state.active === "search"}
            onChange={this.checkInput} />
          <label htmlFor="search">Search</label>
          {this.state.active === "search" ? <FormSearch onSearchChange={this.onSearchChange} /> : null}
        </div>
        <button type="submit" className="btn">Get a joke</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  jokeLoaded,
  jokeRequested,
  jokeError,
  jokesLoaded,
  jokesRequested,
  jokesError
};

const mapStateToProps = state => ({
  loading: state.jokes.loading,
  error: state.jokes.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);