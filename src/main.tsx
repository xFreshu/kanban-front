import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.module.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateYourKanban from "./pages/CreateYourKanban/CreateYourKanban";
import Login from "./pages/Login/Login";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Board from "./pages/Board/Board";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

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
    children: [
      {
        path: "/dashboard/board/:id",
        element: <Board />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
