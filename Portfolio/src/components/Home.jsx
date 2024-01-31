import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import Card from "./Card";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      offset: 10,
    });
  }, []);

  return (
    <>
      <div className="home_container">
        <div className="cursor_lighting"></div>
        <div className="left_subcontainer">
          <div className="info_container">
            <div className="info_top">
              {/*               <div className="img_container">
                <img
                  src="../../public/img/WhatsApp Image 2023-08-17 at 22.22.57.jpeg"
                  alt=""
                />
              </div> */}
              <div className="info_profile">
                <h2>RODRIGO SILVA</h2>
                <h3>FULL STACK DEVELOPER</h3>
                <p>Haciendo realidad lo que te imaginás.</p>
                <p>Creando experiencias digitales.</p>
              </div>
            </div>

            <div className="info_center">
              <span>- Proyectos</span>
              <br />
              <span>- Sobre mí</span>
              <br />
              <span>- Curriculum extra</span>
              <br />
              <span>- Contactame</span>
            </div>

            <div className="info_down">
              <div className="tecnologies">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.4em"
                    height="2.4em"
                    viewBox="0 0 2048 2048"
                  >
                    <path
                      fill="white"
                      d="M1024 25q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 165-50 318t-143 281t-221 224t-286 149q-3 1-9 1t-9 1q-24 0-38-14t-14-37v-140q0-69 1-141q0-51-15-103t-54-87q116-13 203-47t146-96t88-150t30-212q0-78-26-147t-79-128q11-28 16-58t5-60q0-39-8-77t-23-76q-5-2-11-2t-11 0q-32 0-67 10t-69 26t-67 35t-57 36q-125-35-256-35t-256 35q-25-17-57-36t-66-34t-70-26t-67-11h-11q-6 0-11 2q-14 37-22 75t-9 78q0 30 5 60t16 58q-53 58-79 127t-26 148q0 122 29 211t88 150t146 97t203 48q-29 26-44 62t-21 75q-27 13-57 20t-60 7q-64 0-106-30t-75-82q-12-19-29-38t-37-34t-43-24t-48-10h-12q-8 0-15 3t-14 6t-6 10q0 12 14 23t23 18l3 2q22 17 38 32t30 33t23 38t23 47q34 78 95 113t147 36q26 0 52-3t52-9v174q0 24-14 38t-39 14h-8q-5 0-9-2q-157-51-286-147t-221-225t-142-282t-51-318q0-141 36-272t104-244t160-207t207-161T752 62t272-37"
                    />
                  </svg>
                </Link>
                <Link to="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.5em"
                    height="2.5em"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="white"
                      d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="right_subcontainer">
          <div className="content_container">
            <div className="intro">
              <p>
                En 2022, decidí hacer un cambio en mi vida y comencé a estudiar
                la Licenciatura en Informatica. Estudiando la misma conocí el
                desarrollo web, habiendo profundizado en ello en 2023 realizando
                un bootcamp de mas de 600hs. desarrollado varios proyectos,
                entre ellos un E-commerce de videojuegos, clone de Twitter entre
                otros.
              </p>
              <p>
                <br />
                Actualmente trabajo en el desarrollo de una aplicación y página
                web para una empresa de arquitectura y construcción (OTLAS SA).
              </p>
              <br />
              <p className="final_paragraph">
                Cuando no estoy frente al ordenador, generalmente entreno.
                Amante de los animales y del futbol.
              </p>
            </div>
            <div className="projects">
              <div className="projects_tittle">
                <h3>Projectos</h3>
              </div>
              <Link to="https://gamehub-frontend.vercel.app/">
                <div className="card_container">
                  <Card />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
