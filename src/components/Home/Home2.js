import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
              ALGUNAS COSAS DE <span className="purple"> MI </span> 
            </h1>
            <p className="home-about-body">
            Me gusta poder aplicar mis conocimientos y a su vez mejorar y aprender cosas nuevas.
              <br />
              <br />Me considero una persona organizada y 
              <i>
                <b className="purple"> con una gran motivación. </b>
              </i>
              <br />
              <br />
              Deseo tener tanto oportunidades de aprendizaje como de crecimiento personal y  &nbsp;
              <i>
                <b className="purple">nuevos desafíos. </b> 
               
              </i>
              <br />
              <br />
          
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
            <h1>ENCONTRAME EN</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JuliSdru"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/julieta-sdrubolini-7a733a191/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
