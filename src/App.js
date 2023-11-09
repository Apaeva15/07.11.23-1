import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Catalog from "./Pages/Catalog/Catalog";
import Product from "./Pages/Product/Product";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
