import React from 'react';

export default class HelloName extends React.Component {
  static propTypes = {
    name: React.PropTypes.string
  };

  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
