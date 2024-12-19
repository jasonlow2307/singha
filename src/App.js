import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div
      style={{
        minHeight: "100vh", // Ensure the total height is at least the viewport height
        display: "flex",
        flexDirection: "column", // Arrange children vertically
      }}
    >
      <Header />
      {/* Main content fills the available space */}
      <div style={{ flex: 1, overflow: "auto" }}>
        <Hero />
      </div>
      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
};

export default App;
