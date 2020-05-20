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
      <div className="search-wrapper">
        <input type="search"
               className="form-search"
               onChange={this.handleSearch}
               placeholder="Free text search..."
               value={this.state.searchText}
               minLength="3"
               required
        />
      </div>
    );
  }
}
