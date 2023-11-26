import React from "react";
import { Col, Row } from "react-bootstrap";
import daksh from "../../Assets/daksh.jpeg";
import sb from "../../Assets/sam.jpeg";
import joel from "../../Assets/joelv.jpeg";
import yo from "../../Assets/yo.jpeg";
import oj from "../../Assets/ojas.jpeg";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img
              src={daksh}
              
              text="Daksh Sharma"
              description="President" 
      />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
              src={yo}
              
              text="Yogesh Giri"
              description="Male Vice-President" 
      />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
              src={oj}
              
              text="Ojasvi Tak"
              description="Female Vice-President" 
      />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
              src={joel}
              
              text="Joel V George"
              description="Secretary" 
      />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
              src={sb}
              
              text="Samridhi Bhardwaj"
              description="Treasurer" 
      />
      </Col>
    </Row>
  );
}

export default Toolstack;
