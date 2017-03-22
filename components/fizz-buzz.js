import React from 'react';

export default class FizzBuzz extends React.Component {
  static propTypes = {
    number: React.PropTypes.number
  };

  render() {
    const { number } = this.props;
    if (number % 3 === 0 && number % 5 === 0) {
      return <span>FizzBuzz</span>;
    } else if (number % 3 === 0) {
      return <span>Fizz</span>;
    } else if (number % 5 === 0) {
      return <span>Buzz</span>;
    } else {
      return <span>{number}</span>;
    }
  }
}
