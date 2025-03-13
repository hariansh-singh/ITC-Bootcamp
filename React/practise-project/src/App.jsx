import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <main>
        <header>
          <Nav />
        </header>

        <section>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>

          <footer>
            <Footer />
          </footer>
        </section>
      </main>
    </Router>
  );
};

export default App;
