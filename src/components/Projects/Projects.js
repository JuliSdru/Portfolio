import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import lacomanda from "../../Assets/Projects/lacomanda.png";
import dentist from "../../Assets/Projects/dentist.png";
import local from "../../Assets/Projects/local.png";
import breaking from "../../Assets/Projects/breaking.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         Mis <strong className="purple">proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
         Algunos de mis proyectos más recientes.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={breaking}
              isBlog={false}
              title="Breaking Bad"
              description="Aplicacion web, que consta del routeo de Angular, la cual tiene un alta de usuario, un listado proveniente de una API y un listado de favoritos elegidos por el usuario."
              link="https://github.com/JuliSdru/PARCIAL_LAB"
            />
          </Col>
    
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dentist}
              isBlog={false}
              title="Buena sonrisa"
              description="La idea de este proyecto era generar un ABM con conexion a la base de datos NoSQL FireBase, tanto de pacientes, como especialistas y turnos y de esta manera poder gestionar todas las funcioanlidades desde diferentes perfiles."
              link="https://github.com/JuliSdru/TP-FINAL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={local}
              isBlog={false}
              title="Locales"
              description="Aplicacion web, donde se podia dar de alta un local, y dentro del mismo, dar de alta a sus productos, se podia obtener la lista y descargarla a traves de PDF."
              link="https://github.com/JuliSdru/RSP-LABIV"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lacomanda}
              isBlog={false}
              title="La comanda"
              description="Este proyecto consistió en crear una aplicación para restaurantes con ABMs de empleados, clientes, pedidos por mesa y de reservas. Todas las funcionalidades de la aplicación estaban potenciadas con la lectura de códigos QRs. 
              En este proyecto todos los integrantes del equipo teníamos roles específicos con responsabilidades asociadas."
              link="https://github.com/JuliSdru/2020_TP_PPS_Comanda_1_cuatri"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
