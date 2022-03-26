import React from "react";
import ReactTypingEffect from "react-typing-effect";
import bannerStyles from "../Banner/Banner.module.css";
// import Avatar from "../Avatar/Avatar";

const Banner = () => {
  return (
    <>
      <div className={bannerStyles.Banner}>
        {/* <main>
          <div>
            <Avatar />
          </div>
        </main> */}
        {/* <div> */}
        <ReactTypingEffect
          speed="100"
          typingDelay="1000"
          className={bannerStyles.Letters}
          eraseDelay="2000"
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
        />
      </div>
      {/*       
    </div> */}
    </>
  );
};

export default Banner;
