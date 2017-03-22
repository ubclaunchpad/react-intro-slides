// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Slide,
  Text
} from "spectacle";

import HelloWorld from '../components/hello-world';
import HelloName from '../components/hello-name';
import HelloNameInputtable from '../components/hello-name-inputtable';
import Ticker from '../components/ticker';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  lp: require("../assets/launch-pad.png"),
  react: require("../assets/react.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#222222",
  tertiary: "#00b480",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="quartenary">
            Intro to React
          </Heading>
          <Image height={500} style={{ marginTop: 32 }} src={images.react.replace("/", "")} />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" notes={`
          What is Launch Pad
          What do we do
      `}>
          <Heading size={1} fit lineHeight={1} textColor="tertiary">
            UBC Launch Pad
          </Heading>
          <Text textColor="secondary">
            Student App Design Team
          </Text>
          <Image height={400} style={{ marginTop: 32 }} src={images.lp.replace("/", "")} />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          Facebook definition
      `}>
          {/* needs work */}
          <Heading size={1} lineHeight={2}>
            What is React?
          </Heading>
          <List>
            <ListItem>"JavaScript library for building user interfaces"</ListItem>
            <ListItem>V in MVC</ListItem>
            <ListItem>function: data -> html</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          Declarative - You tell React what you want, not how to do it
            * easier to test
          Composable - Everything you make in React will be a component
            * easier to divide concerns
          Reusable - Reuse components within a project, and on different platforms
            * easier to start a project, and expand it later

          Popular in industry,
          Makes developer's life easier
      `}>
          <Heading size={1} lineHeight={2}>
            Benefits
          </Heading>
          <List>
            <ListItem>Declarative</ListItem>
            <ListItem>Composable</ListItem>
            <ListItem>Reusable</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          Start with a simple example

          Note: I'm going to be using ES6 in my slides, as that's standard practice
          for React apps. If you're used to older versions of JavaScript and something
          is difficult to understand, feel free to let me know.

          Explain Component: render function, jsx

          Appear: ReactDOM
      `}>
          <Heading size={1} lineHeight={2}>
            Hello World
          </Heading>
          <CodePane lang="javascript" source={
`import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello, world!</h1>;
  }
}`
          } />

          <Appear>
            <CodePane lang="javascript" source={
`import ReactDOM from 'react-dom';

let reactAppRoot = document.getElementById('root');
ReactDOM.render(<HelloWorld />, reactAppRoot);`
            } />
          </Appear>

          <HelloWorld />

        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          Props are how data is transferred between components

          Indicate props when declaring a component
          Whenever the parent component changes, the child will be rerendered
          with the new props.

          NOTE: props are readonly
          props always flow downward, from parent to child

          From now on, will omit ReactDOM.render and imports
      `}>
          <Heading size={1} lineHeight={2}>
            Props!
          </Heading>
          <CodePane lang="javascript" source={
`import React from 'react';

class HelloName extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}`
          } />
          <Appear>
            <CodePane lang="javascript" source={
`import ReactDOM from 'react-dom';

let reactAppRoot = document.getElementById('root');
ReactDOM.render(<HelloName name="UBC" />, reactAppRoot);`
            } />
          </Appear>
          <HelloName name="UBC" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          State is how data is stored within a component.

          A component can change its own state directly, which triggers a rerender
          of that component.

          * constructor
          * setState
          * onChange handler (arrow function)
          * controlled component
      `}>
          <Heading size={1} lineHeight={2}>
            State!
          </Heading>
          <CodePane lang="javascript" source={
`class HelloNameInputtable extends React.Component {
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

  handleChange = (event) => this.setState({name: event.target.value});
}`
          } />

        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
          <Heading size={1} lineHeight={2}>
            Example
          </Heading>
          <HelloNameInputtable />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
            React needs to know when the state changes
            When you modify state directly, React doesn't know about it

            Functional with respect to props/state.
            same props + same state = same output to the DOM
            argument to setState is merged with current state, not overridden
        `}>
          <Heading size={1} lineHeight={2}>
            Notes on State
          </Heading>
          <List>
            <ListItem>Never modify state directly</ListItem>
            <ListItem>Components must be functional</ListItem>
            <ListItem>State updates are merged</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          React provides hooks into the lifecycle of each component

          AJAX/set up timer in componentDidMount
          Can modify state or perform action when certain props are received

          IMPORTANT: can tell React whether it should rerender this component
      `}>
          <Heading size={1} lineHeight={2} fit>
            Component Lifecycle
          </Heading>
          <List>
            <ListItem>Before and after mounting</ListItem>
            <ListItem>Before and after updating</ListItem>
            <ListItem>Upon receiving props</ListItem>
            <ListItem>Before unmounting</ListItem>
          </List>

        </Slide>

        <Slide align="center flex-start" transition={["slide"]} bgColor="primary" textColor="secondary" notes={`

      `}>
          <Heading size={1} lineHeight={1.5}>
            Ticker
          </Heading>
          <CodePane lang="javascript" source={
`class Ticker extends React.Component {
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
}`
          } />

          <Ticker />

        </Slide>

      </Deck>
    );
  }
}
