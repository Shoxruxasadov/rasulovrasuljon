import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contributors from "./components/Contributors";
import Line from "./components/Line";


function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contributors />
        <Line />
      </main>
      <Footer />
    </>
  );
}

export default App;
