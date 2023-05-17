import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/nav";
import Hero from "./components/hero";
import Logos from "./components/logos";
import Residences from "./components/residences";
import Values from "./components/values";
import ContactUs from "./components/contactus";
import Getstarted from "./components/getstarted";
import Footer from "./components/footer";

function App() {
  return (
    <div className="font-poppins">
      <div className="bg-black ">
        <Navbar />
      </div>
      <Hero />
      <Logos />
      <Residences/>
      <Values/>
      <ContactUs/>
      <Getstarted/>
      <Footer/>
    </div>
  );
}

export default App;
