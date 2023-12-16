import React from "react";

import "./style.css";

import Navbar from "./component/Navbar";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
