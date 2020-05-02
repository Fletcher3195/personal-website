import React from 'react';
import './App.css';

// Bulma Framework CSS
import 'react-bulma-components/dist/react-bulma-components.min.css';

import { Container, Heading, Hero, Section } from 'react-bulma-components';

function App() {
  return (
    <div className="App">
      <Section className="hero-section">
        <Hero className="hero" color="dark" gradient size="fullheight" style={{"align-items": "center"}}>
          <Hero.Body>
            <Container>
              <Heading>Hello!</Heading>
              <Heading>I am James</Heading>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
    </div>
  );
}

export default App;
