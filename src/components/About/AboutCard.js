import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          We are the students of <span className="purple">B. Tech Robotics (2021-2025), </span>
            Amity University Noida.<span className="purple"></span>
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "For the things we learn, we learn by doing them."{" "}
          </p>
          <footer className="blockquote-footer">ESDRC Club</footer>
        </blockquote>
      </Card.Body>
    </Card>
    
  );
}

export default AboutCard;
