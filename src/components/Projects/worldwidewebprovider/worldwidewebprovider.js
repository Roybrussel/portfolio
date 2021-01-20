import React from "react";
import "../Projects.css";
import { Button, Card } from "react-bootstrap/";

const Worldwidewebprovider = () => {
  return (
    <Card className="project-card">
      <Card.Img
        variant="top"
        src="images/wwwprovider.png"
        alt="worldwidewebprovider-img"
        className="wwwprovider-img"
      />
      <Card.Body>
        <Card.Title>WorldWideWeb Provider</Card.Title>
        <Card.Text className="card-text">
          In need of the fastest internet you could ever dream of? Or how about
          those 800+ HD TV channels? Be sure to check out WorldWideWeb Provider.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="card-footer">
        <Button
          className="project-btn"
          href="https://roybrussel.github.io/WorldWideWeb-Provider/"
          target="_blank"
        >
          Project
        </Button>
        <Button
          className="project-btn"
          href="https://github.com/Roybrussel/WorldWideWeb-Provider"
          target="_blank"
        >
          Github
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Worldwidewebprovider;
