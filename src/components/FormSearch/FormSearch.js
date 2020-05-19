import React from 'react';
import { connect } from 'react-redux';

import './formSearch.scss';

class FormSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: ''
    }
  }

  onSearchChange = ({ target }) => {

  };

  render() {
    return (
      <div></div>
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
)(FormSearch);