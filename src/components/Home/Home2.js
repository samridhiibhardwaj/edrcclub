import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Our <span className="purple"> Prospects</span>
            </h1>
            <p className="home-about-body">
              To identify like-minded people from any domain and to help fulfill their aspirations in the field of
              <i>
                <b className="purple"> Robotics and Automation. </b>
              </i>
              <br />
              <br />
              We are providing a platform to compile and build on ideas in the&nbsp;
              <i>
                <b className="purple">hardware</b> world.{" "}
                <b className="purple">
                </b>
              </i>
              <br />
              <br />
              We are also focusing on the mutual growth and learning of both the aspirants and the conductors during the process of <b className="purple"></b>
              <i>
                <b className="purple">
                  {" "}
                  advanced projects.
                </b>
              </i>
              &nbsp;
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Us On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="mailto:stellarroboticsclub@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillMail/>
              </a>
            </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/esdrc-amity-05984a2a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/esdrc_amity?igshid=MzMyNGUyNmU2YQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
