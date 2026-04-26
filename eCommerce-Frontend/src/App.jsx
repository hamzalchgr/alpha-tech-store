import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import LandingPage from "./pages/product/LandingPage";
import AuthPage from "./pages/authentication/AuthPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/accountPage" element={<AuthPage />} />
        <Route path="/landingPage/:id" element={<LandingPage />} />
      </Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
};

export default App;
