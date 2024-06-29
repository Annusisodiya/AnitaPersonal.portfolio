import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import restaurant from "../../Assets/Projects/restaurant.png"
import payrent from "../../Assets/Projects/payrent.jpeg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Restaurant"
              description="A restaurant POS system is a software solution designed specifically for the needs of restaurants, bars, cafes, and other food service establishments to efficiently manage their operations, including sales transactions, inventory management, and customer interactions."
              ghLink="https://github.com/Annusisodiya/restaurant"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={payrent}
              isBlog={false}
              title="payrent"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/Annusisodiya/payrents"
              
            />
          </Col>

         
          
          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
