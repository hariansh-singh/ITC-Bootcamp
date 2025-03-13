import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { getDatafromtoken } from "../services/AuthService";

const NavBar = () => {
  let [userData, setUserData] = useState({});
  console.log(userData);
  const navigate = useNavigate();
  useEffect(() => {
    let data = getDatafromtoken();
    setUserData(data);
  }, []);
  const logout = () => {
    if (window.confirm("Do u want to logout ?")) {
      localStorage.removeItem("_token");
      navigate("/");
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="addproduct">
              Add Product
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Welcome: {userData.email}</NavDropdown.Item>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
