// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Slide,
  Text
} from "spectacle";

import HelloWorld from '../components/hello-world';
import HelloName from '../components/hello-name';
import HelloNameInputtable from '../components/hello-name-inputtable';
import Ticker from '../components/ticker';
import FizzBuzzTicker from '../components/fizz-buzz-ticker';
import AnimalList from '../components/animal-list';
import FunctionalButton from '../components/functional-button';
import VeryStylishButton from '../components/very-stylish-button';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  lp: require("../assets/launch-pad.png"),
  internalState: require("../assets/react-internal-state.png"),
  externalState: require("../assets/react-external-state.png"),
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
          Using lifecycle methods to set up and tear down our timer
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
    return <h1>Ticks: {this.state.ticks}</h1>;
  }

  tick = () => this.setState({ ticks: this.state.ticks + 1 });
}`
          } />
          <Ticker />
        </Slide>

        <Slide align="center flex-start" transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          Conditional rendering

          You can render different things depending on the input

          Embed ternary operators within JSX
        `}>
        <Heading size={1} lineHeight={1.5}>
          FizzBuzz
        </Heading>
          <CodePane lang="javascript" source={
`class FizzBuzz extends React.Component {
  render() {
    const { number } = this.props;
    if (number % 3 === 0 && number % 5 === 0) {
      return <h1>FizzBuzz</h1>;
    } else if (number % 3 === 0) {
      return <h1>Fizz</h1>;
    } else if (number % 5 === 0) {
      return <h1>Buzz</h1>;
    } else {
      return <h1>{number}</h1>;
    }
  }
}`
          } />
          <Appear>
            <CodePane lang="javascript" source={
  `class Ticker extends React.Component {
    // ...
    render() {
      return <h1>Ticks: <FizzBuzz number={this.state.ticks} /></h1>;
    }
    // ...
  }`
            } />
          </Appear>

        <FizzBuzzTicker />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          You can define what props that are expected within the component using proptypes.
          You can define defaults to use when props are not provided using defaultProps.

          Will warn when unexpected props are passed, in dev mode

          propTypes document how to use your component too!
        `}>
        <Heading size={1} lineHeight={2} fit>
          Prop Types and Default Props
        </Heading>
        <CodePane lang="javascript" source={
`class HelloName extends React.Component { ... }

HelloName.propTypes = { name: React.PropTypes.string };
HelloName.defaultProps = { name: "UBC" };`
        } />

        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          Can use map function to render lists of data
          Each element requires a key prop, so React can do efficient diffs
        `}>
          <Heading size={1} lineHeight={1.5} fit>
            Lists and Enumeration
          </Heading>
          <CodePane lang="javascript" source={
`import React, { Component, PropTypes } from 'react';

class AnimalList extends Component {
  static propTypes = { animals: PropTypes.arrayOf(PropTypes.string) };
  static defaultProps = { animals: ['Ant', 'Bear', 'Camel', 'Duck'] };

  render() {
    return (
      <ul>
        {this.props.animals.map(this.renderListItem)}
      </ul>
    );
  }

  renderListItem = (animal) => (
    <li key={animal}>{animal}</li>
  );
}`
          } />
          <Layout>
            <Fill />
            <Fit>
              <AnimalList />
            </Fit>
            <Fill />
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          Stateless components can be written directly as functions
          Can add propTypes/defaultProps with dot notation

          Don't have access to lifecycle methods anymore

          Just JSX, so components are not restricted to React.
        `}>
        <Heading size={1} lineHeight={1.5} fit>
          Functional Components
        </Heading>
        <CodePane lang="javascript" source={
`const FunctionalButton = (props) => (
  <button onClick={props.onClick}>
    {props.label}
  </button>
);

FunctionalButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
};

ReactDOM.render(
  <FunctionalButton
    label="I am a button"
    onClick={() => alert('You clicked a button. Good job...')} />,
  document.getElementById('root')
)`
        } />
        <div style={{ padding: 32 }}>
          <FunctionalButton label="I am a button" onClick={() => alert('You clicked a button. Good job...')} />
        </div>
        </Slide>


        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          You can use regular CSS
          Or you can use inline styles
          Logic (JS), Structure (HTML), and Style (CSS) together in single component
          Easily modify style inline based on props or state

          Modify our button to have a custom style
        `}>
        <Heading size={1} lineHeight={1.5}>
          Styles
        </Heading>
        <CodePane lang="javascript" source={
`const styles = {
  borderRadius: 12,
  borderStyle: 'solid',
  borderColor: 'blue',
  backgroundColor: 'blue',
  padding: 16
};

const VeryStylishButton = (props) => (
  <button style={styles} onClick={props.onClick}>
    {props.label}
  </button>
);`
        } />

        <div style={{ padding: 32 }}>
          <VeryStylishButton label="I'm a stylish button" onClick={() => alert("I'm not a designer")} />
        </div>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`

        `}>
        <Heading size={1} lineHeight={1.5}>
          Lifting State Up
        </Heading>
        <Layout>
          <Appear>
            <Image height={400} style={{ marginTop: 32 }} src={images.internalState.replace("/", "")} />
          </Appear>
          <Appear>
            <Image height={400} style={{ marginTop: 32 }} src={images.externalState.replace("/", "")} />
          </Appear>
        </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          JavaScript ecosystem is very complicated

          Can be difficult to get started

          Facebook provides a utility to bootstrap React apps

          Configures Babel/Webpack to handle all the nasty transpilation
        `}>
        <Heading size={1} lineHeight={1.5} fit>
          Starting a new Project
        </Heading>
        <Appear>
          <CodePane lang="bash" source={
`npm install -g create-react-app
create-react-app app-name
cd app-name
npm start`
          } />
        </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          create-react-app hides the complexity of the React/JavaScript ecosystem
          Often can create entire app without going beyond this

          When you are ready to have full control over build pipeline etc,
          you can eject the app by running a single script.
        `}>
          <Heading size={1} lineHeight={1.5}>
            That's all!
          </Heading>
          <Text>
            A template app will be running on localhost and you can start writing components right away.
          </Text>
        </Slide>

      </Deck>
    );
  }
}
