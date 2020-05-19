import React from 'react';
import { connect } from 'react-redux';

import './form.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      category: '',
      searchText: '',
      active: 'random'
    }
  }

  checkInput= (e) => {
    this.setState({
      active: e.target.id
    });
  };

  onSearchChange = ({ target }) => {
    const { searchJokes } = this.props;
    const searchText = target.value;

    // searchJokes(searchText);
  };

  handleSubmit = ({}) => {
    // e.preventDefault();
  };

  render() {
    // const {  } = this.props;
    const categories = <div>Categories</div>;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="randomInput" id="random" type="radio" value="random"
            checked={this.state.active === "random"}
            onChange={this.checkInput} />
          <label htmlFor="random">Random</label>
        </div>
        <div>
          <input
            name="categoryInput" id="category" type="radio" value="category"
            checked={this.state.active === "category"}
            onChange={this.checkInput} />
          <label htmlFor="category">From categories </label>
          {this.state.active === "category" ? categories : null}
        </div>
        <div>
          <input
            name="searchInput" id="search" type="radio" value="search"
            checked={this.state.active === "search"}
            onChange={this.checkInput} />
          <label htmlFor="search">Search</label>
          {this.state.active === "search" ? (<div>Search</div>) : null}
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {

};

const mapStateToProps = state => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);