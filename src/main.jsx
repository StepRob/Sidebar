import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./error-page";
import { Dashboard } from "./Pages/Dashboard";
import { Cotizaciones, ListadoVentas, NuevaVenta } from "./Pages/Ventas/index";
import { LoginPage } from "./Pages/LoginPage";
import { store } from '../store/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },

      {
        // path: "ventas/:id",
        path: "ventas/nueva-venta",
        element: <NuevaVenta />,
      },
      {
        path: "ventas/listado-ventas",
        element: <ListadoVentas />,
      },
      {
        path: "ventas/cotizaciones",
        element: <Cotizaciones />,
      },
      {
        path: "Login/users",
        element: <LoginPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
