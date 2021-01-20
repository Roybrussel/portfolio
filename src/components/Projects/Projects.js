import React from "react";
import "./Projects.css";
import { Container, CardDeck } from "react-bootstrap/";

import Fjordadventures from "./fjordadventures/fjordadventures";
import Travelboard from "./travelboard/travelboard";
import Captaincovid from "./captaincovid/captaincovid";
import Worldwidewebprovider from "./worldwidewebprovider/worldwidewebprovider";
import Simongame from "./simongame/simongame";
import Reveraclone from "./reveraclone/reveraclone";

const Projects = () => {
  return (
    <section id="projects-section">
      <div className="heading">
        <h1>PROJECTS</h1>
        <hr />
      </div>
      <Container fluid className="projects-container">
        <CardDeck className="card-deck">
          <Fjordadventures />
          <Travelboard />
          <Captaincovid />
        </CardDeck>
        <CardDeck className="card-deck">
          <Worldwidewebprovider />
          <Simongame />
          <Reveraclone />
        </CardDeck>
      </Container>
    </section>
  );
};

export default Projects;
