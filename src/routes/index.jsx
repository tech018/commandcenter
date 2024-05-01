import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../modules/layouts/default";
import Login from "../pages/auth/login";
import { Provider } from "react-redux";
import store from "../store/index";
import { LinearProgress, Box } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "../config/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard",
    async lazy() {
      const { DashboardLayout } = await import(
        "../modules/layouts/dashboard/index"
      );
      return { Component: DashboardLayout };
    },
    children: [
      {
        index: true,
        async lazy() {
          const { DashboardIndex } = await import("../pages/dashboard/index");
          return {
            Component: DashboardIndex,
          };
        },
      },
      {
        path: "application",
        async lazy() {
          let { Application } = await import("../pages/dashboard/application");
          return {
            Component: Application,
          };
        },
      },
    ],
  },
]);
export default function MainRoute() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider
          router={router}
          fallbackElement={
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          }
        />
      </ThemeProvider>
    </Provider>
  );
}

// function Home() {
//   return <div style={{marginLeft: 130}}>Home page</div>;
// }
