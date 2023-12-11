import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormSubmiited from "./FormSubmiited.jsx";
import Layout from "./MainLayout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <BrowserRouter>
        {" "}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/form-submitted" element={<FormSubmiited />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  </React.StrictMode>
);
