import React from 'react';
import HelloName from './hello-name';

export default class HelloNameInputtable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "UBC"
    };
  }

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleChange} />
        <HelloName name={this.state.name} />
      </div>
    );
  }

  handleChange = (event) => this.setState({ name: event.target.value });
}
