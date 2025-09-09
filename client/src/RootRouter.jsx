import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./core/components/layouts/Landing";

const RootRouter = () => {
  // routing specs.
  // routing specs : we have to work with the components(predefined components from react-router-dom.).
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
    </Routes>
  );
};

export default RootRouter;
