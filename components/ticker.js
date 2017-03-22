import React from 'react';

export default class Ticker extends React.Component {
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
    return <h1>Time: {this.state.ticks}</h1>;
  }

  tick = () => this.setState({ ticks: this.state.ticks + 1 });
}
