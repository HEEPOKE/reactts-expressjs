import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "../Pages/HomePage";
// import StorePage from "../Pages/StorePage";
// import CreatePage from "../Pages/CreatePage";
// import ForgotPasswordPage from "../Pages/Auth/ForgotPasswordPage";
// import NotFound from "../errors/NotFound";
const HomePage = lazy(() => import("../Pages/HomePage"));
const StorePage = lazy(() => import("../Pages/StorePage"));
const CreatePage = lazy(() => import("../Pages/CreatePage"));
const ForgotPasswordPage = lazy(
  () => import("../Pages/Auth/ForgotPasswordPage")
);
const NotFound = lazy(() => import("../errors/NotFound"));

export default function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
