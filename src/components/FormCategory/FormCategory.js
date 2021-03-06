import React from 'react';
import './formCategory.scss';

export class FormCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      active: ''
    }
  }

  selectCategory = (e) => {
    this.setState({
      active: e.target.id
    });

    this.props.changeCategory(e);
  };

  render() {
    const { category } = this.props;

    return (
      <>
        <input id={category} type="radio" value={category} name="category"
               onChange={this.selectCategory} required
        />
        <label htmlFor={category}>{category}</label>
      </>
    )
  }
}
