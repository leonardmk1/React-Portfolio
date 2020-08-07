import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import {Link} from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
          <header>
            <MDBNavbar color="aqua-gradient" dark expand="md" style={{fontFamily:"League Spartan"}}>
              <MDBNavbarBrand href="/">
                <h1>Matthew Leonard</h1>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem >
                    <MDBNavLink to="/">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/portfolio">Portfolio</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/contact">Contact</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <Link href="https://github.com/leonardmk1" style={{color: "white", margin:"15px"}}><MDBIcon fab icon="github" /></Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link target="blank" href="https://www.linkedin.com/in/matthewkleonard/" style={{color: "white", margin:"15px"}}><MDBIcon fab icon="linkedin-in" /></Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link target="blank" href="https://twitter.com/home?lang=en" style={{color: "white", margin:"15px"}}><MDBIcon fab icon="twitter" /></Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link target="blank" href="Resume, Matthew Leonard.pdf" style={{color: "white", margin:"15px"}}><MDBIcon icon="file-pdf" /></Link>
                  </MDBNavItem>

                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
      </div>
    );
  }
}

export default Navbar;