import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contacts from "./components/Contacts";
import Gurugram from "./components/Gurugram";
import Mumbai from "./components/Mumbai";
import Bangalore from "./components/Bangalore";
import User from "./components/User";
import Gallery from "./components/Gallery";
import Ref from "./components/PractiseComponent";

const App = () => {
  return (
    <Router>
      <main>
        <Nav />
        <section className="container">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="user" element={<User />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="practise" element={<Ref />} />
            <Route path="contacts" element={<Contacts />}>
              <Route path="gurugram" element={<Gurugram />} />
              <Route path="mumbai" element={<Mumbai />} />
              <Route path="bangalore" element={<Bangalore />} />
            </Route>
          </Routes>
        </section>
      </main>
    </Router>
  );
};

export default App;
