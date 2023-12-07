import React from "react";
import { Header } from "./components/Header/Header";
import {HeroSection} from "./components/HeroSection/HeroSection"
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ContactUs />
    </div>
  );
}

export default App;
