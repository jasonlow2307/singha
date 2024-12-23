import React from "react";
import { Box, Toolbar, Container } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardOverview from "../components/DashboardOverview";
import ChartSection from "../components/ChartSection";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container>
          <DashboardOverview />
          <ChartSection />
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
