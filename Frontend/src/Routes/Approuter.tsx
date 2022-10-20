import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import StorePage from "../Pages/StorePage";
import RegisterPage from "../auth/RegisterPage";
import ForgotPasswordPage from "../auth/ForgotPasswordPage";
import NotFound from "../errors/NotFound";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
