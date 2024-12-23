import React from "react";
import { Box, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";

const ChartSection = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sessions",
        data: [12000, 15000, 18000, 17000, 20000, 22000],
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Page Views & Downloads
      </Typography>
      <Line data={data} />
    </Box>
  );
};

export default ChartSection;
