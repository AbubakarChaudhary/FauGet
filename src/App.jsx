import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <ProductList />
              </>
            }
          />
          <Route path="product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
        <Testimonial />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
