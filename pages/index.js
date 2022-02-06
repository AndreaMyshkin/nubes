import { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const cloud = useRef(null);
  function rn(from, to) {
    return ~~(Math.random() * (to - from + 1)) + from;
  }

  function rs() {
    return arguments[rn(1, arguments.length) - 1];
  }

  const boxShadows=(max)=> {
    let ret = [];
    for (let i = 0; i < max; ++i) {
      ret.push(`
        ${rn(1, 100)}vw ${rn(1, 100)}vh ${rn(20, 40)}vmin ${rn(1, 20)}vmin
        ${rs("#094293 ", "#c6f1e7", "#f0fff3", "#fa4659")}
      `);
    }
    return ret.join(",");
  }

  const update =() =>{

    cloud.current.style.boxShadow = boxShadows(100);
  }

  useEffect(() => {
    update();
  }, []);
  return (
    <>
    <div className="container" onClick={update}>
      <div ref={cloud} id="cloud">


      </div>
       
      <svg width="0">
        <filter id="filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".01"
            numOctaves="10"
          />
          <feDisplacementMap in="SourceGraphic" scale="240" />
        </filter>
      </svg>
      <div className="quote">
      <h1> ¿Qué son las nubes? ¿Una arquitectura
          del azar? Quizá Dios las necesita
          para la ejecución de Su infinita
          obra y son hilos de la trama oscura.
          Quizá la nube sea no menos vana
          que el hombre que la mira en la mañana.
          </h1>
          <p>J.L. BORGES</p>
          </div>
    </div>
         
          </>
  );
}
