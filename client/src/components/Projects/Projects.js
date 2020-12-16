import React from "react";
import "./Projects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Projects = () => {
  return (
    <section id="projects-section">
      <div className="heading">
        <h1>PROJECTS</h1>
        <hr />
      </div>
      <Container fluid className="projects-container">
        <Row></Row>
      </Container>
    </section>
  );
};

export default Projects;
