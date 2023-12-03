import React from "react";
import { Header } from "./components/Header/Header";
import {HeroSection} from "./components/HeroSection/HeroSection"
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUsSection />
    </div>
  );
}

export default App;
