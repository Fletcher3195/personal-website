import React from 'react'
import logo from './logo.svg'
import './App.css'
import {Button, Container, Jumbotron, Row, Col}  from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="app">
        <section className="home">
          <Container fluid>
              <Row>
                <Col className="hero-col">
                  <Jumbotron className="hero">
                    <Container className="hero-text">
                      <h1 className="greeting">Hi! I'm James!</h1>
                      <p>
                        "Some type of quote" - somebody
                      </p>
                    </Container>
                  </Jumbotron>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="about">

          </section>
          <section className="portfolio">
            
            </section>
    </div>
  );
}

export default App;
