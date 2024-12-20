import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ShoppingPage from "./components/ShoppingPage";
import ShoppingCartPage from "./components/ShoppingCart";
import { SnackbarProvider } from "notistack";

const App = () => {
  // State to toggle between Hero and ShoppingPage
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SnackbarProvider>
        <Header onNavigate={handleNavigate} />
        <div style={{ flex: 1, overflow: "auto" }}>
          {currentPage === "home" && <Hero />}
          {currentPage === "shopping" && <ShoppingPage />}
          {currentPage === "shoppingCart" && <ShoppingCartPage />}
        </div>
      </SnackbarProvider>
      <Footer />
    </div>
  );
};

export default App;
