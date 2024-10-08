import React from "react";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = () => {

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Vismay Tank
          <br />
          Software developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
      </Animate>
    </section>
  );
};
export default Home;