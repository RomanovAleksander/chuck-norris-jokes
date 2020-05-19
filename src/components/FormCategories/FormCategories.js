import React from 'react';
import {connect} from 'react-redux';
import { ApiService } from '../../services';
import {
  categoriesLoaded, categoriesRequested, categoriesError
} from '../../actions/categories/actions';
import { FormCategory } from '../FormCategory';

import './formCategories.scss';

class FormCategories extends React.Component {
  constructor() {
    super();
    this.state = {
      category: ''
    }
  }

  componentDidMount() {
    const {
      categoriesLoaded, categoriesRequested, categoriesError
    } = this.props;

    categoriesRequested();
    ApiService.get('/jokes/categories')
      .then((data) => categoriesLoaded(data))
      .catch((err) => {
        categoriesError(err)
      });
  }

  handleChange = e => {
    const { onCategoryChange } = this.props;
    const category = e.target.value;
    this.setState({ category });
    onCategoryChange(category);
  };

  render() {
    const { categories } = this.props;
    return (
      <div className="categories-list">
        {
          categories.map((category) => {
            return (
              <div key={category}>
                <FormCategory category={category} changeCategory={this.handleChange}/>
              </div>
            )
          })
        }
      </div>
    );
  }
}

const mapDispatchToProps = {
  categoriesLoaded,
  categoriesRequested,
  categoriesError
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
  loading: state.categories.loading,
  error: state.categories.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormCategories);
