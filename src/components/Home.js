import React from "react";
import SignupForm from "./SignupForm";
import Footer from "./Footer";

function Home(props) {
  return (
    <div className="home-container">
      <div className="parallax">
        <div className="parallax-content">
          <div id="home-title">Maia's coming</div>
          <div id="home-main-tagline">Baby Formula. Half the Price.</div>
          <div id="home-sub-tagline">sign up to join our launch</div>
          <SignupForm />
          <div id="warning">Not a Part of the WIC Program</div>
        </div>
      </div>
      <div className="home-content">
        <div className="content" />
        <div className="content one">
          <h1>Quality Formula</h1>
          <p>
            FDA approved and thoughtfully crafted formula that offers complete
            nutrition for your baby and is easy on the tummy for the little one
          </p>
        </div>
        <div className="content" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
