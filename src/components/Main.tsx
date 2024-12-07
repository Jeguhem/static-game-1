import React from "react";
import Hero from "./Hero";
import HeroMobile from "./HeroMobile";

function Main() {
  return (
    <div className=" lg:h-screen overflow-y-hidden  ">
      <div>
        <Hero />
        <HeroMobile />
      </div>
    </div>
  );
}

export default Main;
