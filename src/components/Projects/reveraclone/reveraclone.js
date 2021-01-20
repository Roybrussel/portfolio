import React from "react";
import "../Projects.css";
import { Button, Card } from "react-bootstrap/";

const Reveraclone = () => {
  return (
    <Card className="project-card">
      <Card.Img
        variant="top"
        src="images/reveraclone.png"
        alt="reveraclone-img"
        className="reveraclone-img"
      />
      <Card.Body>
        <Card.Title>Revera Clone</Card.Title>
        <Card.Text className="card-text">
          A clone of the Revera website, which was one of the assignments from
          the Ironhack Bootcamp.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="card-footer">
        <Button
          className="project-btn"
          href="https://roybrussel.github.io/lab-bootstrap-cloning-revera/"
          target="_blank"
        >
          Project
        </Button>
        <Button
          className="project-btn"
          href="https://github.com/Roybrussel/lab-bootstrap-cloning-revera"
          target="_blank"
        >
          Github
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Reveraclone;
