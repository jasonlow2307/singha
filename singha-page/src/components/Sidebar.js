import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/BarChart";
import GroupIcon from "@mui/icons-material/Group";
import TaskIcon from "@mui/icons-material/Task";

const Sidebar = () => {
  const menuItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Analytics", icon: <AnalyticsIcon /> },
    { text: "Clients", icon: <GroupIcon /> },
    { text: "Tasks", icon: <TaskIcon /> },
  ];

  return (
    <Drawer variant="permanent" sx={{ width: 240 }}>
      <Toolbar />
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
