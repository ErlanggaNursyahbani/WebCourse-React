import React from "react";

import Faqpage from "./FaqPage";
import MainComponent from "../components/MainComponent";
import KelasComponent from "../components/KelasComponent";
import TestimonialComponent from "./../components/TestimonialComponent";

const Homepage = () => {
  return (
    <div className="homepage">
      <MainComponent />
      <KelasComponent />
      <TestimonialComponent />
      <Faqpage />
    </div>
  );
};

export default Homepage;
