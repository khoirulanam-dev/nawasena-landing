import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Products from "./sections/Products";
import Footer from "./sections/Footer";
import FloatingAction from "./components/FloatingAction";

function App() {
  return (
    <div className="bg-nawasena-bg min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Footer />
      <FloatingAction />
    </div>
  );
}

export default App;
