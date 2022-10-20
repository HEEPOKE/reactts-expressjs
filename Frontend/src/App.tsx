import { useState } from "react";
import NavbarMenu from "./components/Navbar/index";
import AppRouter from "./Routes/Approuter";

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <AppRouter />
    </div>
  );
}

export default App;
