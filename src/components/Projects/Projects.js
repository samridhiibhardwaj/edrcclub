import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import el from "../../Assets/Projects/el.png";
import fo from "../../Assets/Projects/fo.jpeg";
import ni from "../../Assets/Projects/ni.jpeg";
import th from "../../Assets/Projects/th.jpeg";
import tw from "../../Assets/Projects/tw.png";
import cad from "../../Assets/Projects/cad.jpeg";
import rob from "../../Assets/Projects/rob.jpeg";
import self from "../../Assets/Projects/self.jpeg";
import led from "../../Assets/Projects/led.jpeg";
import blog from "../../Assets/Projects/blog.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projects and <strong className="purple">Games</strong>
        </h1>
        <p style={{ color: "white" }}>
          
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ENES Mario"
              description="Nintendo Entertainment System Mario made using Arduino."
                         
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Air Show"
              description="A beautiful air show with remote controlled drones and airship." 
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={el}
              isBlog={false}
              title="CNC Plotter"
              description="CNC plotter that can draw and sketch on a sheet of paper."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rob}
              isBlog={false}
              title="A Robot Dog"
              description="A friendly robot dog whose personality and behaviour evolves over time."
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={th}
              isBlog={false}
              title="Shock Wire Game"
              description="A path of wire that needs to be traced by another wire. If these wires come in contact while tracing, the player gets a mild electric shock."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fo}
              isBlog={false}
              title="Wireless Remote Controlled Car Race"
              description="Four wireless remote controlled cars will race on a track."
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cad}
              isBlog={false}
              title="CAD Designs"
              description="A showcase for designs made on CAD software."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tw}
              isBlog={false}
              title="NES Contra"
              description="Nintendo Entertainment System Contra made using Arduino."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={self}
              isBlog={false}
              title="Self Balancing Car"
              description="A self-balancing car comprising a one- or two-wheeled platform."
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={led}
              isBlog={false}
              title="LED Cube"
              description="A three-dimensional light-emitting diode cube."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ni}
              isBlog={false}
              title="Innovation Show"
              description="The club members will make interesting and innovative projects that will be put on display as an exhibition."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Robotic Arm"
              description="A six axis articulated robotic arm."
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
