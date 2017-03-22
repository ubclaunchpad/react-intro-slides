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
          Composable - Everything you make in React will be a component
          Reusable - Reuse components within a project, and on different platforms

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

          Appear: rendered component

          From now on, will omit ReactDOM.render
      `}>
          <Heading size={1} lineHeight={2}>
            Hello World
          </Heading>
          <CodePane source={
`import React from 'react';
class HelloWorld extends React.Component {
  render() {
    return <h1>Hello, world!</h1>;
  }
}`
          } />

          <Appear>
            <CodePane source={
`import ReactDOM from 'react-dom';
let reactAppRoot = document.getElementById('root');
ReactDOM.render(<HelloWorld />, reactAppRoot);`
            } />
          </Appear>

          <HelloWorld />

        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary" notes={`
          Props are how data is transferred between components
      `}>
          <Heading size={1} lineHeight={2}>
            Props!
          </Heading>
          <CodePane source={
`import React from 'react';
class HelloName extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}`
          } />
          <Appear>
            <CodePane source={
`import ReactDOM from 'react-dom';
let reactAppRoot = document.getElementById('root');
ReactDOM.render(<HelloName name="UBC" />, reactAppRoot);`
            } />
          </Appear>
          <HelloName name="UBC" />

        </Slide>

      </Deck>
    );
  }
}
