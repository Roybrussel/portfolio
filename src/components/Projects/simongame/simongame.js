import React from "react";
import "../Projects.css";
import { Button, Card } from "react-bootstrap/";

const Simongame = () => {
  return (
    <Card className="project-card">
      <Card.Img
        variant="top"
        src="images/gamesimon.png"
        alt="simongame-img"
        className="simongame-img"
      />
      <Card.Body>
        <Card.Title>Simon Game</Card.Title>
        <Card.Text className="card-text">
          A Simon Game to test out my jQuery skills. Ready to test out your
          memory capacity? Press any button to play!
        </Card.Text>
      </Card.Body>
      <Card.Footer className="card-footer">
        <Button
          className="project-btn"
          href="https://roybrussel.github.io/simon-game/"
          target="_blank"
        >
          Project
        </Button>
        <Button
          className="project-btn"
          href="https://github.com/Roybrussel/simon-game"
          target="_blank"
        >
          Github
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Simongame;
