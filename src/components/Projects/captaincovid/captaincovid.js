import React from "react";
import "../Projects.css";
import { Button, Card } from "react-bootstrap/";

const Captaincovid = () => {
  return (
    <Card className="project-card">
      <Card.Img
        variant="top"
        src="images/captaincovid.png"
        alt="captaincovid-img"
        className="project-img"
      />
      <Card.Body>
        <Card.Title>Captain Covid</Card.Title>
        <Card.Text className="card-text">
          Your mission is clear, Captain: Emerge from your social-distancing
          lockdown to reclaim what belongs to us. We're counting on you!
        </Card.Text>
      </Card.Body>
      <Card.Footer className="card-footer">
        <Button
          className="project-btn"
          href="https://roybrussel.github.io/captain-covid-ironhack/"
          target="_blank"
        >
          Project
        </Button>
        <Button
          className="project-btn"
          href="https://github.com/Roybrussel/captain-covid-ironhack"
          target="_blank"
        >
          Github
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Captaincovid;
