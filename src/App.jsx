import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Products from "./sections/Products";
import RequestSample from "./sections/RequestSample";
import Footer from "./sections/Footer";
import FloatingAction from "./components/FloatingAction";
import SmoothAnimations from "./components/SmoothAnimations";

function App() {
  return (
    <div className="bg-nawasena-bg min-h-screen font-sans">
      <SmoothAnimations />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <RequestSample />
      <Footer />
      <FloatingAction />
    </div>
  );
}

export default App;
