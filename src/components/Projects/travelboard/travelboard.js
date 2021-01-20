import React from "react";
import "../Projects.css";
import { Button, Card } from "react-bootstrap/";

const Travelboard = () => {
  return (
    <Card className="project-card">
      <Card.Img
        variant="top"
        src="images/travelboard.png"
        alt="travelboard-img"
        className="travelboard-img"
      />
      <Card.Body>
        <Card.Title>Travel Board</Card.Title>
        <Card.Text className="card-text">
          A platform where users can share all of their adventures by creating
          travel boards. Find out what other users have been up to through the
          discover page.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="card-footer">
        <Button
          className="project-btn"
          href="https://travelboard-ironhack.herokuapp.com/"
          target="_blank"
        >
          Project
        </Button>
        <Button
          className="project-btn"
          href="https://github.com/Roybrussel/travel-board"
          target="_blank"
        >
          Github
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Travelboard;
