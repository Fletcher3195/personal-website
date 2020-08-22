import React from 'react'
import aboutPhoto from './resources/img/about-photo2.jpg'
import './App.css'
import {Button, Col, Container, Image, Jumbotron, Row}  from 'react-bootstrap'

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
            <Container>
                <Row>
                  <Col className="col-md-5 col-xs-12">
                    <Image src={aboutPhoto} roundedCircle />
                  </Col>
                  <Col className="col-md-6 col-xs-12">
                    <h2 class='aboutMe'>About Me</h2>
                    <hr/>
                    <p>
                        Welcome to my website. It's still very much a work in progress - but I hope you like it!
                    </p>
                    <p>
                        I currently work as a software developer at <a href="https://www.unisys.com/">Unisys Corp</a> on a network security & visualtion product, <a href="https://www.unisys.com/offerings/security-solutions/unisys-stealth-products-and-services/stealth(aware)">Stealth(aware)</a>!
                    </p>
                    <p>
                        Be sure to check back later when I have real content and a living resume.
                    </p>
                  </Col>
                  <Col className="col-md-1 col-xs-12">
                    <a type="button" class="btn btn-default" aria-label="Left Align" target="_blank" href='mailto:fletcher.3195@gmail.com'>
                      <span class="fas fa-envelope fa-4x" aria-hidden="true"></span>
                    </a>
                    <a type="button" class="btn btn-default" aria-label="Left Align" target="_blank" href='http://www.linkedin.com/in/fletcher3195'>
                      <span class="fab fa-linkedin fa-4x" aria-hidden="true"></span>
                    </a>
                    <a type="button" class="btn btn-default" aria-label="Left Align" target="_blank" href='http://github.com/fletcher3195'>
                      <span class="fab fa-github fa-4x" aria-hidden="true"></span>
                    </a>
                  </Col>
                </Row>
              </Container>
          </section>

          <section className="portfolio">
            
          </section>
    </div>
  );
}

export default App;
