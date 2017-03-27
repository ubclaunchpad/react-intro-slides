// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  // Code,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  // Table,
  // TableItem,
  // TableHeaderItem,
  // TableRow,
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
  reactProps: require("../assets/react-props.png"),
  reactState: require('../assets/react-state.png'),
  reactLayout: require('../assets/react-layout.png'),
  react: require("../assets/react.png"),
  electron: require('../assets/electron.png'),
  frameworks: require('../assets/frameworks.png'),
  ios: require('../assets/ios.png'),
  android: require('../assets/android.jpg'),
  windows: require('../assets/windows.png'),
  linux: require('../assets/linux.png'),
  spock: require('../assets/spock.gif'),
  thatsAll: require('../assets/thats-all-folks.png')
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
        <Slide transition={["zoom"]} bgColor="secondary" notes={`
          A couple questions before getting started
          How many people are familiar with JavaScript?
          How many people are familiar with ES6?
          How many people are familiar with other FE frameworks like Angular, Ember, Vue etc.
        `}>
          <Heading size={1} fit caps lineHeight={1} textColor="quartenary">
            Intro to React
          </Heading>
          <Image height={500} style={{ marginTop: 32 }} src={images.react.replace("/", "")} />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" notes={`
          Student engineering team, we meet every Saturday and work on an array
          of projects across iOS, Android, web, and data science. We will be recruiting
          for the summer soon so if you are interested, keep an eye on our Facebook page.
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
          Facebook definition: JavaScript library for building user interfaces.
          That's great, but why should I care?
          What's different about React.
      `}>
          <Heading size={1} lineHeight={2}>
            React
          </Heading>
          <BlockQuote>
            <Quote textSize={42} textColor="secondary">JavaScript library for building user interfaces</Quote>
            <Cite>Facebook</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          You tell React what you want, not how to do it: easier to test.
          Component-based: easier to divide concernes.
          Reuse components within a project, and on different platforms.
          Popular in industry/startups.
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
          Let's start with a simple example.
          Explain: import, class (prototype), Component, render function, JSX.
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


        <Slide align="center flex-start" transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          Props are how data is transferred between components.
          Indicate props when declaring a component.
          Props change triggers a rerender.
          Props are readonly.
          Props always flow downward, from parent to child

        `}>
          <Heading size={1} lineHeight={1.5}>
            Props
          </Heading>
          <Text>How data is moved between components</Text>
          <Image height={500} style={{ marginTop: 16 }} src={images.reactProps.replace("/", "")} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          From now on, will omit ReactDOM.render and imports
      `}>
          <Heading size={1} lineHeight={2}>
            Hello Props
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
          You can define what props that are expected within the component using proptypes.
          You can define defaults to use when props are not provided using defaultProps.
          Will warn when unexpected props are passed (in dev mode).
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

        <Slide align="center flex-start" transition={["slide"]} bgColor="primary" textColor="secondary" notes={`

        `}>
          <Heading size={1} lineHeight={1.5}>
            State
          </Heading>
          <Text>How state is stored within components</Text>
          <Image height={500} style={{ marginTop: 16 }} src={images.reactState.replace("/", "")} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          State is how data is stored within a component.
          A component can change its own state directly, which triggers a rerender
          of that component.
          Explain: setState, arrow function
      `}>
          <Heading size={1} lineHeight={2}>
            Hello State
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
            Demo
          </Heading>
          <HelloNameInputtable />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
            React needs to know when the state changes.
            When you modify state directly, React doesn't know about it.
            Functional with respect to props/state.
            same props + same state = same output to the DOM.
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
          React provides hooks into the lifecycle of each component.
          What does mounting mean?
          AJAX/set up timer after mounting
          Can modify state or perform action when certain props are received
          Can tell React whether it should rerender this component.
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
  constructor() {
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
          Conditional rendering.
          Embed ternary operators within JSX.
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
}

class Ticker extends React.Component {
  // ...
  render() {
    return <h1>Ticks: <FizzBuzz number={this.state.ticks} /></h1>;
  }
  // ...
}`
          } />
        <FizzBuzzTicker />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          Can use map function to render lists of data.
          Each element requires a key prop, so React can do efficient diffs.
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
          Virtual DOM is abstraction of the DOM.
          Compare to JQuery, where you find and update certain DOM nodes after state changes.
          With React, you say what the DOM should look like given a state, React efficiently updates DOM for you.
          Makes one-directional data flow feasible.
          Abstracts away differences between browsers.
        `}>
          <Heading size={1} lineHeight={1.5} fit>
            Virtual DOM
          </Heading>
          <List>
            <ListItem>Light weight representation of DOM</ListItem>
            <ListItem>Efficient diffing algorithm</ListItem>
            <ListItem>Batch updates to real DOM</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          Stateless components can be written directly as functions.
          Can add propTypes/defaultProps with dot notation.
          Don't have access to lifecycle methods anymore.
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
    label="I'm a button"
    onClick={() => alert('You clicked a button. Good job...')} />,
  document.getElementById('root')
)`
        } />
        <div style={{ padding: 32 }}>
          <FunctionalButton label="I'm a button" onClick={() => alert('You clicked a button. Good job...')} />
        </div>
        </Slide>


        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          We modify our button to have a custom style.
          You can use regular CSS.
          Or you can use inline styles.
          Logic (JS), Structure (HTML), and Style (CSS) together in single component.
          Easily modify style inline based on props or state.
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
  color: 'white',
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
          Up to now I've described state as existing within components.
          In real apps this is usually not the case.
          We use state containers outside the component hierarchy.
          Components emit actions to change state.
          State container emits events to let components know about state changes.
          This enforces one-directional data flow.
        `}>
        <Heading size={1} lineHeight={1.5} fit>
          Separation of Component and State
        </Heading>
        <Layout>
          <Image height={400} style={{ marginTop: 32 }} src={images.internalState.replace("/", "")} />
          <Appear>
            <Image height={400} style={{ marginTop: 32 }} src={images.externalState.replace("/", "")} />
          </Appear>
        </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          JavaScript ecosystem is very complicated.
          Can be difficult to get started.
          Facebook provides a utility to bootstrap React apps.
          Configures Babel/Webpack to handle all the nasty transpilation.
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
          All source JavaScript files are transpiled into a single bundle file.
          Performance concerns.
          index.html references JavaScript bundle and relevant CSS files.
        `}>
          <Heading size={1} lineHeight={1.5}>
            App Layout
          </Heading>
          <Image height={400} style={{ marginTop: 32 }} src={images.reactLayout.replace("/", "")} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          Downside of React: must render app to DOM on load.
          Isomorphic apps move the inital render to the server.
          Leverage the fact that Node servers use JavaScript.
        `}>
        <Heading size={1} lineHeight={1.5} fit>
          Isomorphic Applications
        </Heading>
        <List>
          <ListItem>Faster page loads</ListItem>
          <ListItem>Search Engine Optimization</ListItem>
        </List>
        <CodePane lang="html" source={
`<div id="root"></div>`
        } />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          This is a Node server that serves a React app.
          Render React app to HTML string and place in the root node.
        `}>
        <Heading size={1} lineHeight={1.5}>
          Example
        </Heading>
        <CodePane lang="javascript" source={
`import http from 'http';
import { renderToString } from 'react-dom/server';
import MyAwesomeReactApp from './path/to/component';

const server = http.createServer((req, res) => {
  const componentHTML = renderToString(<MyAwesomeReactApp />);
` + '  const html = `<!DOCTYPE html>' + `
      <html>
        <head>
          <meta charset="utf-8">
          <title>Isomorphic Redux Demo</title>
        </head>
        <body>` +
          '<div id="react-view">${componentHTML}</div>' + `
          <script type="application/javascript" src="/bundle.js"></script>
        </body>
    </html>\`
  res.send(html);
});

server.listen(8000);`
        } />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          React is great for the web, but wouldn't it be great if we could
          use it elsewhere. And use the same code for different platforms without
          compromising on performance or UX?
        `}>
        <Heading size={1} lineHeight={1.5} fit>
          Beyond the Web
        </Heading>
          <Image height={200} style={{ marginTop: 32 }} src={images.ios.replace("/", "")} />
          <Image height={200} style={{ marginTop: 32 }} src={images.android.replace("/", "")} />
          <Image height={200} style={{ marginTop: 32 }} src={images.windows.replace("/", "")} />
          <Image height={200} style={{ marginTop: 32 }} src={images.linux.replace("/", "")} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          Web applications are pretty good these days, but they are limited by browser.
          What if web applications had access to the same APIs as native apps.
          Electron uses Chromium to render HTML, so you can use the same JSX tags as the web.
          It uses NodeJS to access the filesystem etc.
        `}>
        <Heading size={1} lineHeight={1.5}>
          Electron
        </Heading>
          <Image height={300} style={{ marginTop: 32 }} src={images.electron.replace("/", "")} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          This is all you need to start writing desktop apps with React.
          Point the BrowserWindow to your app and it acts like a web server.
          Electron provides APIs to interact with windows and menus.
          You have access to everything that NodeJS provides.
        `}>
        <Heading size={1} lineHeight={1.5}>
          Example
        </Heading>
          <CodePane lang="javascript" source={
`const app = require('app');
const BrowserWindow = require('browser-window');

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 1360, height: 800});
  mainWindow.loadUrl('file://' + __dirname + '/public/index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});`
          } />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          We can also leverage React on iOS and Android using React Native.
          JavaScript runs in separate thread.
          Uses the same UI components as a native bridge, but rendering is handled
          by React.
          "Learn once, write everywhere."
        `}>
        <Heading size={1} lineHeight={1.5}>
          React Native
        </Heading>
          <List>
            <ListItem>Native UI components</ListItem>
            <ListItem>Rendering managed by React</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          ScrollView provides a native scrollable view.
          We use View rather than div and Text rather than p/h1.
          React just mounts a native UI Component rather than a DOM node.
        `}>
        <Heading size={1} lineHeight={1.5}>
          Example
        </Heading>
          <CodePane lang="javascript" source={
`import React, { Component } from 'react';
import { AppRegistry, ScrollView, Text} = 'react-native';

class ScrollerApp extends Component {
  render() {
    return (
      <ScrollView>
        <Text>
          On iOS, a React Native ScrollView uses a native UIScrollView.
          On Android, it uses a native ScrollView.

          React Native wraps the fundamental native components, giving you
          the performance of a native app, plus the clean design of React.
        </Text>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('ScrollerApp', () => ScrollerApp);
`
          } />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          React CLI will create an Node module for your JavaScript and
          an XCode project.
        `}>
        <Heading size={1} lineHeight={1.5} fit>
          Starting a Native Project
        </Heading>
        <CodePane lang="bash" source={
`npm install -g react-native cli
react-native init my-app
cd my-app
react-native run-ios`
        } />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          On the web you have a choice between CSS and inline styles.
          With React Native, you must use inline styles and flexbox.
          The StyleSheet constructor provides performance benefits when sending
          styles over the native bridge.
        `}>
        <Heading size={1} lineHeight={1.5} fit>
          Inline Styles and Flexbox
        </Heading>
        <CodePane lang="javascript" source={
`import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center'
    color: 'green'
  }
})

class GreatReactNativeApp extends Component {
  // ...
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          All the great styles
        </Text>
      </View
    );
  }
  // ...
}`
        } />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          React Native provides platform-specific components when platforms differ.
          You can do the same thing using the Platform API.
        `}>
        <Heading size={1} lineHeight={1.5} fit>
          Platform Specific Components
        </Heading>
        <CodePane lang="javascript" source={
`// component.ios.js
class iOSComponent extends React {
  // ...
  render() {
    return <ProgressViewIOS />
  }
  // ...
}

// component.android.js
class AndroidComponent extends React {
  // ...
  render() {
    return <ProgressBarAndroid />
  }
  // ...
}

// component.js
import { Platform } from 'react-native';

const Component = Platform.select({
  ios: () => require('./component.ios.js'),
  android: () => require('./components.android.js')
})();

// Now can use component like <Component /> in JSX
`
        } />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
          <Heading size={1} lineHeight={1.5} fit>
            One Last Thing
          </Heading>
          <Text textSize={42} lineHeight={2}>You can use React to make slide decks too!</Text>
          <CodePane lang="javascript" source={
`<Slide transition={["slide"]} bgColor="primary" textColor="secondary">
  <Heading size={1} lineHeight={1.5} fit>
    One Last Thing
  </Heading>
  <Text textSize={32} lineHeight={2}>You can use React to make slide decks too!</Text>
  <CodePane lang="javascript" source={srcString} />
</Slide>`
          } />
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary" textColor="quartenary" notes={`
          Any questions?
        `}>
          <Image height={500} style={{ marginTop: 32 }} src={images.thatsAll.replace("/", "")} />
        </Slide>

      </Deck>
    );
  }
}
