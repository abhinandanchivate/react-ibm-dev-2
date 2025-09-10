import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./core/components/layouts/Landing";
import CoreRouter from "./core/Router";
import AuthRouter from "./auth/Router";
const RootRouter = () => {
  // routing specs.
  // routing specs : we have to work with the components(predefined components from react-router-dom.).
  return (
    <Routes>
      <Route path="/" element={<CoreRouter />}></Route>
      <Route path="/auth/*" element={<AuthRouter />}></Route>
    </Routes>
  );
};

export default RootRouter;
// /auth/* ==> authRouter
// /profile/* ==> profileRouter
// /posts/* ==> postsRouter
// /dashboard ==> dashboardRouter
// / ==> coreRouter
// /* ==> notfoundRouter
