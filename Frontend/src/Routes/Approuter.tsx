import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("../Pages/HomePage"));
const StorePage = lazy(() => import("../Pages/StorePage"));
const CreatePage = lazy(() => import("../Pages/CreatePage"));
const ForgotPasswordPage = lazy(
  () => import("../Pages/Auth/ForgotPasswordPage")
);
const CheckPage = lazy(() => import("../Pages/CheckPage"));
const NotFoundPage = lazy(() => import("../errors/NotFound"));
const LoadingPage = lazy(() => import("../Pages/LoadingPage/index"));

export default function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/check" element={<CheckPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
