import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { AiFillApple } from "react-icons/ai";
import { GrPin } from "react-icons/gr";
import { ImMagicWand } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos! Soy <span className="purple">Julieta Sdrubolini </span>
            de <span className="purple"> Buenos Aires, Argentina.</span>
            <br />Actualmente estoy finalizando la carrera de la Tecnicatura en programación en la UTN-FRA y trabajando como Desarrollador de Software en la Fuerza Aérea Argentina.
            <br />
            <br />
            Aparte de estudiar programación también me gusta estudiar:
          <ul>
            <li className="about-activity">
              <ImMagicWand/> Diseño UX/UI
            </li>
            <li className="about-activity">
              <ImMagicWand /> Idiomas como ingles
            </li>
          </ul>
          Además disfruto de:
          <ul>
            <li className="about-activity">
              <ImMagicWand/> Leer libros
            </li>
            <li className="about-activity">
              <ImMagicWand /> Viajar
            </li>
          </ul>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
