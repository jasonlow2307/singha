import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div
      style={{
        maxHeight: "100vh", // Set the maximum height to the viewport height
        overflow: "hidden", // Hide any overflowing content
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
