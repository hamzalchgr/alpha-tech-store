import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import LandingPage from './pages/product/LandingPage';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/landingPage/:id" element={<LandingPage />} />
      </Route>
    </Routes>
  )
}

export default App