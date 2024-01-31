import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categoria from "./pages/Categorias";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria" element={<Categoria />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
