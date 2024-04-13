import "@/styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IndexPage } from "./shared/components/layout/IndexPage";
import SignInPage from "./Pages/Sign-in";
import SignUpPage from "./Pages/Sign-up";
import DashboardPage from "./Pages/Dashboard";
import DashboardLayout from "./Pages/Dashboard-layout";
import { RootLayout } from "./shared/components/layout/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      { path: "/sign-up/*", element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: "dashboard",
        children: [{ path: "/dashboard", element: <DashboardPage /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
