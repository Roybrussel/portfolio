import React from "react";
import "./Projects.css";
import { Container, CardDeck } from "react-bootstrap/";

import Fjordadventures from "./fjordadventures/fjordadventures";
import Travelboard from "./travelboard/travelboard";
import Captaincovid from "./captaincovid/captaincovid";

const Projects = () => {
  return (
    <section id="projects-section">
      <div className="heading">
        <h1>PROJECTS</h1>
        <hr />
      </div>
      <Container fluid className="projects-container">
        <CardDeck>
          <Fjordadventures />
          <Travelboard />
          <Captaincovid />
        </CardDeck>
      </Container>
    </section>
  );
};

export default Projects;
