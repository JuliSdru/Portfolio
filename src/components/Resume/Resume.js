import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Sdrubolini.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Descargar CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experiencia</h3>
            <Resumecontent
              title="Desarrollor de software"
              date="Diciembre 2020 - Actualidad 2020"
              content={[ "Fuerza Aérea Argentina"
               
              ]}
            />
            <Resumecontent
              title="Auxiliar de ingles instituto Kumon"
              date="Enero 2020 - Actualidad 2020"
              content={[
               
              ]}
             
            />

            <h3 className="resume-title">Idiomas</h3>
            <Resumecontent
              title="Español"
              content={[
                "Nativo."
              ]}
            />
             <Resumecontent
              title="Ingles"
              content={[
                "Nivel medio."
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Educación</h3>
            <Resumecontent
              title="Bachillerato con orientación en economía y administración."
              date="2015 - 2017"
              content={["Instituto Mariano Moreno, Luis Guillon."]}
            />
            <Resumecontent
              title="Técnico Superior en Programación."
              date="2018 - Actualidad"
              content={["Universidad Tecnológica Nacional, Regional Avellaneda."]}
            />
          
            <h3 className="resume-title">Cursos</h3>
            <Resumecontent
              title="Curso introductorio de Python"
              date="Noviembre 2019"
              content={[
                "ITBA, Instituto Tecnológico de Buenos Aires."
              ]}
            />
              <Resumecontent
              title="Diseño UX/UI"
              date="Actualidad"
              content={[
                "CoderHouse"
              ]}
            />
             <Resumecontent
              title="Ingles "
              date="Junio 2019 - Actualidad"
              content={[
                "Instituto Kumon."
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Descargar CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
