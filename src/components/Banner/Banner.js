import React from "react";
import ReactTypingEffect from "react-typing-effect";
import bannerStyles from "../Banner/Banner.module.css";
import Avatar from "../Avatar/Avatar";

const Banner = () => {
  return (
    <>
      <div className={bannerStyles.Banner}>
        {/* <div> */}
        {/* <ReactTypingEffect
          speed="200"
          typingDelay="1500"
          className={bannerStyles.Letters}
          eraseDelay="2500"
          text={["DEVELOPER.", "AUDIO ENGINEER.", "PRODUCER."]}
          cursorRenderer={(cursor) => <h1> </h1>}
          displayTextRenderer={(text, i) => {
            return (
              <h1>
                {text.split(">").map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                     
                    >
                      {char}
                    </span>
                  );
                })}
              </h1>
            );
          }}
        /> */}
      </div>
      {/*       
    </div> */}
    </>
  );
};

export default Banner;
