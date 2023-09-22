import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import AppFunctional from "./components/AppFunctional";
import "./styles/reset.css";
import "./styles/styles.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <h1>GRID'e hoşgeldiniz</h1>
    <nav>
      <NavLink style={{ marginRight: "2rem" }} to="/" exact>
        functional
      </NavLink>
      <NavLink to="/class-based" exact>
        Class-Based
      </NavLink>
    </nav>
    <Routes>
      <Route
        path="/"
        exact
        element={<AppFunctional className="functional" />}
      />
      <Route
        path="/class-based"
        exact
        element={<AppFunctional className="class-based" />}
      />
    </Routes>
  </BrowserRouter>
);
