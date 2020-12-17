import React from "react";
import "./Projects.css";
import { Button, Container, CardDeck, Card } from "react-bootstrap/";

const Projects = () => {
  return (
    <section id="projects-section">
      <div className="heading">
        <h1>PROJECTS</h1>
        <hr />
      </div>
      <Container fluid className="projects-container">
        <CardDeck>
          <Card className="project-card">
            <Card.Img
              variant="top"
              src="images/fjordadventures.png"
              alt="fjordadventures-img"
              className="project-img"
            />
            <Card.Body>
              <Card.Title>Fjord Adventures</Card.Title>
              <Card.Text className="card-text">
                Fjord Adventures is making sure that you will get the full
                experience that Norway has to offer. Get the most out of your
                visit to Norway by booking exciting activities!
              </Card.Text>
            </Card.Body>
            <Card.Footer className="card-footer">
              <Button className="readmore-btn">Read More</Button>
            </Card.Footer>
          </Card>
          <Card className="project-card">
            <Card.Img
              variant="top"
              src="images/travelboard.png"
              alt="travelboard-img"
              className="project-img"
            />
            <Card.Body>
              <Card.Title>Travel Board</Card.Title>
              <Card.Text className="card-text">
                A platform where users can share all of their adventures by
                creating travel boards. Find out what other users have been up
                to through the discover page.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="card-footer">
              <Button className="readmore-btn">Read More</Button>
            </Card.Footer>
          </Card>
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
                Your mission is clear, Captain: Emerge from your
                social-distancing lockdown to reclaim what belongs to us. We're
                counting on you!
              </Card.Text>
            </Card.Body>
            <Card.Footer className="card-footer">
              <Button className="readmore-btn">Read More</Button>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
    </section>
  );
};

export default Projects;
