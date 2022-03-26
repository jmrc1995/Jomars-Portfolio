import Avatar from "../Avatar/Avatar";
import React from "react";
import Banner from "../Banner/Banner";
import landingStyle from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={landingStyle.LandingPageStyle}>
      <main>
        <div>
          <Banner />
          <Avatar />
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
