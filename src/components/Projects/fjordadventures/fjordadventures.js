import React from "react";
import "../Projects.css";
import { Button, Card } from "react-bootstrap/";

const Fjordadventures = () => {
  return (
    <Card className="project-card">
      <Card.Img
        variant="top"
        src="images/fjordadventures.png"
        alt="fjordadventures-img"
        className="fjordadventures-img"
      />
      <Card.Body>
        <Card.Title>Fjord Adventures</Card.Title>
        <Card.Text className="card-text">
          Fjord Adventures is making sure that you will get the full experience
          that Norway has to offer. Get the most out of your visit to Norway by
          booking exciting activities!
        </Card.Text>
      </Card.Body>
      <Card.Footer className="card-footer">
        <Button
          className="project-btn"
          href="https://fjord-adventures.herokuapp.com/"
          target="_blank"
        >
          Project
        </Button>
        <Button
          className="project-btn"
          href="https://github.com/Roybrussel/fjord-adventures"
          target="_blank"
        >
          Github
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Fjordadventures;
