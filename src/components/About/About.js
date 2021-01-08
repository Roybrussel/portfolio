import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

  return (
    <section id="about-section">
      <div className="heading">
        <h1>ABOUT</h1>
        <hr />
      </div>
      <Container fluid className="about-container">
        <Row className="about-row">
          <Col md={7} className="about-content">
            <div>
              <div className="about-text">
                <h3>Web Developer.</h3>
                <p>
                  I am Roy-Arne Brussel, a 28 year old from The Netherlands.
                  Graduated from Ironhack in Amsterdam as a Full Stack Developer
                  in 2020. As a creative person I have a preference for the
                  frontend side of web development. Being able to visualize an
                  idea and turn it into a fully fledged application that is
                  pleasing to the eye is really mesmerizing to me.
                  <br />
                  <br />
                  Besides being a developer, I also like to travel the world and
                  as a half Norwegian I have a profound love for Norway as a
                  country.
                </p>
              </div>
              <div className="language-container">
                <h3>
                  Skills <i class="fas fa-code" />
                </h3>
                <p>
                  <i className="fab fa-html5 about-icon" alt="html5" />
                  <i className="fab fa-css3-alt about-icon" alt="css3" />
                  <i className="fab fa-js about-icon" alt="javascript" />
                  <i className="fab fa-node about-icon" alt="node" />
                  <i className="fab fa-react about-icon" alt="react" />
                  <i class="fab fa-sass about-icon" alt="sass" />
                </p>
              </div>
              <div className="social-container">
                <h3>
                  Connect <i class="fas fa-hashtag" />
                </h3>
                <p>
                  <a
                    href="https://www.linkedin.com/in/roy-arne-brussel/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin about-icon" />
                  </a>
                  <a
                    href="https://github.com/Roybrussel"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github-square about-icon" />
                  </a>
                  <a href={`mailto:${process.env.CONTACT_EMAIL}`}>
                    <i className="fas fa-envelope-square about-icon" />
                  </a>
                </p>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div>
              <img
                src="images/profile-img.png"
                alt="profile-img"
                className="profile-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
