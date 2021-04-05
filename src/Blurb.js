import React from "react";
import Typewriter from "typewriter-effect";

function Blurb() {
  return (
    <div className="container test">
      <div className="row type-effect">
        {/* <div className="col-lg-12">
                    <blockquote className="blurb-text mb-5"><p className="blurb-paragraph typewriter">Hi, my name is Toye. <span class="intro">I am a web developer. </span></p></blockquote>
                </div> */}
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString("Hi, I'm Toye Ogundepo.")

              .pauseFor(1000)
              .deleteChars(14)
              .typeString("a web developer.")
              .start();
          }}
        />
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-4 d-flex justify-content-center" id="">
          <a href="#projects">
            <i class="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blurb;
