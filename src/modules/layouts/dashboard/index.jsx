import { Outlet } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import {
  Box,
  List,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Badge,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { useState } from "react";
import Footer from "./footer";
import Navigation from "./navigation";
import DrawerMenu from "./drawer";
import SideListMenu from "./sidelistmenu";

export function DashboardLayout() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navigation position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <ChevronRightIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </Navigation>
      <DrawerMenu variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {SideListMenu()}
          {/* {mainListItems} */}
          {/* <Divider sx={{ my: 1 }} /> */}
          {/* {secondaryListItems} */}
        </List>
      </DrawerMenu>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Box maxWidth="lg" sx={{ m: 4 }}>
          <Outlet />
        </Box>
        <Footer sx={{ pt: 4 }} />
      </Box>
    </Box>
  );
}
