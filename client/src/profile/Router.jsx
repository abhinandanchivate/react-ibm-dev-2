import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateProfile from "./components/forms/CreateProfile";

const Router = () => {
  return (
    <Routes>
      <Route path="create-profile" element={<CreateProfile />}></Route>
      <Route path="edit-profile" element={<CreateProfile />}></Route>
    </Routes>
  );
};

export default Router;
