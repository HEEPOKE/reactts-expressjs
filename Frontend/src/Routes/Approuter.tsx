import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const LoginPage = lazy(() => import("../Pages/Auth/LoginPage/"))
const RegisterPage = lazy(() => import("../Pages/Auth/RegisterPage/"))
const ForgotPasswordPage = lazy(
  () => import("../Pages/Auth/ForgotPasswordPage")
);
const HomePage = lazy(() => import("../Pages/HomePage"));
const StorePage = lazy(() => import("../Pages/StorePage"));
const CreatePage = lazy(() => import("../Pages/CreatePage"));
const CheckPage = lazy(() => import("../Pages/CheckPage"));
const NotFoundPage = lazy(() => import("../errors/NotFound"));
const LoadingPage = lazy(() => import("../Pages/LoadingPage/index"));

export default function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/Auth/Forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/check" element={<CheckPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
