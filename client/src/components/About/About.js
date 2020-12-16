import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section id="about-section">
      <div className="heading">
        <h1>ABOUT</h1>
        <hr />
      </div>
      <Container fluid className="about-container">
        <Row>
          <Col md={7}>
            <div className="about-content">
              <div className="about-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vel ipsum tempus turpis pulvinar vehicula. Donec id lorem
                  vitae arcu eleifend efficitur. Quisque luctus, magna faucibus
                  porttitor sagittis, diam nunc fringilla massa, non congue quam
                  ante nec ante. Praesent venenatis sit amet ex id aliquet.
                  Suspendisse potenti. Nunc neque tortor, semper nec dapibus
                  sed, porttitor eget arcu. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia curae; In
                  vitae augue tristique nunc maximus imperdiet.
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
                  <i className="fab fa-linkedin about-icon" />
                  <i className="fab fa-github-square about-icon" />
                  <i className="fas fa-envelope-square about-icon" />
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
