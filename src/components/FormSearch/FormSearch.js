import React from 'react';
import './formSearch.scss';

export default class FormSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: ''
    }
  }

  handleSearch = e => {
    const { onSearchChange } = this.props;
    const searchText = e.target.value;
    this.setState({ searchText });
    onSearchChange(searchText);
  };

  render() {
    return (
      <div>
        <input type="search"
               onChange={this.handleSearch}
               placeholder="search"
               value={this.state.searchText}
               minLength="3"
        />
      </div>
    );
  }
}
