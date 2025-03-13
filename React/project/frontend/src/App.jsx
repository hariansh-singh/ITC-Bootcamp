import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { getToken } from "./services/AuthService";

const RouteProtect = ({ children }) => {
  return getToken() != undefined ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="signup" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route
              path=""
              element={
                <RouteProtect>
                  <Home />
                </RouteProtect>
              }
            />
            <Route
              path="addproduct"
              element={
                <RouteProtect>
                  <AddProduct />
                </RouteProtect>
              }
            />
          </Route>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
