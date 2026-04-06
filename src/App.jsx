import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Loading from "./components/Loading/Loading";

// Lazy load pages
const Home = lazy(() => import("./pages/Home/Home"));
const Apps = lazy(() => import("./pages/Apps/Apps"));
const Installation = lazy(() => import("./pages/Installation/Installation"));
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/readlist" element={<Installation />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;