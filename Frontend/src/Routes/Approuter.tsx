import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import StorePage from "../Pages/StorePage";
import RegisterPage from "../auth/RegisterPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default AppRouter;
