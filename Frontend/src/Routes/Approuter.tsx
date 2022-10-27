import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import StorePage from "../Pages/StorePage";
import CreatePage from "../Pages/CreatePage";
import ForgotPasswordPage from "../Pages/Auth/ForgotPasswordPage";
import NotFound from "../errors/NotFound";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
