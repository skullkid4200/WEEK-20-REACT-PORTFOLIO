import React from 'react';
import {
  Row,
  Column,
} from "./PortfolioElements";

const Portfolio = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'
      }}
    >

      <Row>
        <Column>
          <section className="card">
            <header>First Group Project</header>
            <img src={require('./images/movienight_screenshot.png')} alt="Project 1 Screenshot" />
            <p>Random Similar Movie Generator</p>
            <a href="https://github.com/skullkid4200/Atomic-Cats-Project-1">GitHub Link</a>
            <a href="https://skullkid4200.github.io/Atomic-Cats-Project-1/">Deployed Application</a>
          </section>
        </Column>
        <Column>
          <section className="card">
            <header>Second Group Project</header>
            <img src={require('./images/project2screenshot.png')} alt="Project 2 Screenshot" />
            <p>Hey Boo-Boo! A Picnic/Potluck App</p>
            <a href="https://github.com/miacias/hey-boo-boo">GitHub Link</a>
            <a href="https://lit-river-34902.herokuapp.com/">Deployed Application</a>
          </section>
        </Column>
        <Column>
          <section className="card">
            <header>Project 3</header>
            <img src={require('./images/comingsoon.jpg')} alt="Coming Soon" />
            <p>Coming Soon</p>
            <a href="https://github.com/skullkid4200/Timed-Coding-Quiz-Week-4">GitHub Link</a>
            <a href="https://skullkid4200.github.io/Timed-Coding-Quiz-Week-4/">Deployed Application</a>
          </section>
        </Column>
        <Column>
          <section className="card">
            <header>Project 3</header>
            <img src={require('./images/comingsoon.jpg')} alt="Coming Soon" />
            <p>Coming Soon</p>
            <a href="https://github.com/miacias/hey-boo-boo">GitHub Link</a>
            <a href="https://lit-river-34902.herokuapp.com/">Deployed Application</a>
          </section>
        </Column>
        <Column>
          <section className="card">
            <header>Project 3</header>
            <img src={require('./images/comingsoon.jpg')} alt="Coming Soon" />
            <p>Coming Soon</p>
            <a href="https://github.com/miacias/hey-boo-boo">GitHub Link</a>
            <a href="https://lit-river-34902.herokuapp.com/">Deployed Application</a>
          </section>
        </Column>
        <Column>
          <section className="card">
            <header>Project 3</header>
            <img src={require('./images/comingsoon.jpg')} alt="Coming Soon" />
            <p>Coming Soon</p>
          </section>
        </Column>
      </Row>
    </div>
  );
};

export default Portfolio;


/* <section className="card">
        <header>First Group Project</header>
        <a href="https://github.com/skullkid4200/Atomic-Cats-Project-1"><img src={require('./images/movienight_screenshot.png')}
          alt="Project Screenshot" /></a>
        <p>Random Similar Movie Generator</p>
        <a href="https://github.com/skullkid4200/Atomic-Cats-Project-1">GitHub Link</a>
        <a href="https://skullkid4200.github.io/Atomic-Cats-Project-1/">Deployed Application</a>
      </section> */