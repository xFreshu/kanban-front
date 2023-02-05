import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.module.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateYourKanban from "./pages/CreateYourKanban/CreateYourKanban";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Dashboard from "./pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateYourKanban />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
