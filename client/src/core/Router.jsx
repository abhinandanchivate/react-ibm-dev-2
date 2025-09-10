import React from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./components/layouts/Landing";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
    </Routes>
  );
};

export default Router;
