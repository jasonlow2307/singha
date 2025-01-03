import React, { useEffect, useState } from "react";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Footer from "./pages/Footer";
import ShoppingPage from "./pages/ShoppingPage";
import ShoppingCartPage from "./pages/ShoppingCart";
import { SnackbarProvider } from "notistack";
import { ShoppingCartProvider } from "./providers/ShoppingCartProvider";
import "./providers/i18n";
import WhatsAppIcon from "./components/WhatsappIcon";
import MobileNavBar from "./pages/MobileNavBar";
import { useTranslation } from "react-i18next";
import PaymentPage from "./pages/Payment";

const App = () => {
  // State to toggle between Hero and ShoppingPage
  const [currentPage, setCurrentPage] = useState("home");
  const { t } = useTranslation();

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    // Dynamically update the document title
    document.title = t("title"); // Assuming "title" is a key in your translations
  }, [t]);

  // npm run deploy to deploy
  // npm start for development

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SnackbarProvider>
        <ShoppingCartProvider>
          <Header onNavigate={handleNavigate} />
          <MobileNavBar onNavigate={handleNavigate} />
          <div style={{ flex: 1, overflow: "auto" }}>
            {currentPage === "home" && <Hero onNavigate={handleNavigate} />}
            {currentPage === "shopping" && (
              <ShoppingPage onNavigate={handleNavigate} />
            )}
            {currentPage === "shoppingCart" && (
              <ShoppingCartPage onNavigate={handleNavigate} />
            )}
            {currentPage === "payment" && (
              <PaymentPage onNavigate={handleNavigate} />
            )}
          </div>
        </ShoppingCartProvider>
        ,
      </SnackbarProvider>
      <WhatsAppIcon />
      <Footer />
    </div>
  );
};

export default App;
