import React, { Component, PropTypes } from 'react';

export default class AnimalList extends Component {
  static propTypes = { animals: PropTypes.arrayOf(PropTypes.string) };
  static defaultProps = { animals: ['Ant', 'Bear', 'Camel', 'Duck'] };

  render() {
    return (
      <ul style={{ textAlign: 'left' }}>
        {this.props.animals.map(this.renderListItem)}
      </ul>
    );
  }

  renderListItem = (animal) => (
    <li key={animal}>{animal}</li>
  );
}
