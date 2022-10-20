import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import StorePage from "../Pages/StorePage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/store" element={<StorePage />} />
    </Routes>
  );
}

export default AppRouter;
