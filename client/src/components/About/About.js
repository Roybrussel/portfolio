import React from "react";
import "./About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <section id="about-section">
      <div className="heading">
        <h1>ABOUT</h1>
        <hr />
      </div>
      <Container fluid className="about-content-container">
        <Row>
          <Col md={7}>
            <div className="about-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vel ipsum tempus turpis pulvinar vehicula. Donec id lorem vitae
                arcu eleifend efficitur. Quisque luctus, magna faucibus
                porttitor sagittis, diam nunc fringilla massa, non congue quam
                ante nec ante. Praesent venenatis sit amet ex id aliquet.
                Suspendisse potenti. Nunc neque tortor, semper nec dapibus sed,
                porttitor eget arcu. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia curae; In vitae augue
                tristique nunc maximus imperdiet.
              </p>
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
