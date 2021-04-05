import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import About from './AboutComponent';
import { Link } from 'react-router-dom';
import { HashLink as HLink} from "react-router-hash-link";

function Navbar_Component(props) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const AboutPage = () => {
    return (
      <About />
    )
  }
  
  return (
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light sticky-top navbar-across">
        <NavbarBrand className="navbar-brand" href="#">
          Toye <span className="last-name">Ogundepo</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
                <NavItem>
                  <NavLink href="/" tag={Link} to="/" style={{marginLeft: "5px"}}>
                   Home <span class="sr-only">(current)</span>
                  </NavLink>
                </NavItem>

                <NavItem style={{display: "flex", alignItems: "center"}}>
                  <HLink className="project-link" tag={Link} to="/#projects" style={{marginLeft: "5px"}}>Projects</HLink> 
                </NavItem>

                <NavItem>
                  <NavLink tag={Link} to="/about" style={{marginLeft: "5px"}}>About</NavLink>
                </NavItem>

                <NavItem style={{display: "flex", alignItems: "center"}}>
                  <HLink className="contact-link" tag={Link} to="/#contact" style={{marginLeft: "5px"}}>Contact</HLink>
                </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );

}

export default Navbar_Component;
