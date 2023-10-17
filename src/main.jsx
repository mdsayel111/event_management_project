import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";
import AuthProvitder from "./Contexts/AuthContext";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvitder>
      <HelmetProvider>
        <RouterProvider router={Router} />
      </HelmetProvider>
    </AuthProvitder>
  </React.StrictMode>
);
