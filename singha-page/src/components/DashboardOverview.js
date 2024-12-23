import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const DashboardOverview = () => {
  const stats = [
    { title: "Users", value: "14k", change: "+25%" },
    { title: "Conversions", value: "325", change: "-25%" },
    { title: "Event Count", value: "200k", change: "+5%" },
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((stat, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{stat.title}</Typography>
              <Typography variant="h4">{stat.value}</Typography>
              <Typography
                color={stat.change.includes("-") ? "error" : "success"}
              >
                {stat.change}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardOverview;
