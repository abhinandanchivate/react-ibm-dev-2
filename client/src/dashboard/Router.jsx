import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
    </Routes>
  );
};

export default Router;
