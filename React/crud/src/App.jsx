import React from "react";
import NavigationBar from "./components/NavigationBar";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

const App = () => {
  return (
    <main>
      <Router>
        <NavigationBar />
        <Container>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="editpro/:id" element={<EditProduct />} />
          </Routes>
        </Container>
      </Router>
    </main>
  );
};

export default App;
