import React from 'react';
import FizzBuzz from './fizz-buzz';

export default class FizzBuzzTicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticks: 0,
      timer: null
    };
  }

  componentDidMount() {
    const timer = setInterval(this.tick, 1000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    return <h1>Ticks: <FizzBuzz number={this.state.ticks} /></h1>;
  }

  tick = () => this.setState({ ticks: this.state.ticks + 1 });
}
