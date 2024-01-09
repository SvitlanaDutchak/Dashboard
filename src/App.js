import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/main.scss";

import { Customers } from "./pages/Customers";
import { Help } from "./pages/Help";
import { Product } from "./pages/Product";
import { Promote } from "./pages/Promote";
import { Income } from "./pages/Income";
import { Homepage } from "./pages/Homepage";
import { Layout } from "./Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="Dashboard" element={<Homepage />} />
        <Route path="customers" element={<Customers />} />
        <Route path="help" element={<Help />} />
        <Route path="product" element={<Product />} />
        <Route path="promote" element={<Promote />} />
        <Route path="income" element={<Income />} />
      </Routes>
    </Layout>
  );
}

export default App;
