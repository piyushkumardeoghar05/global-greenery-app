import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import classes from "./navbar.module.css";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTree } from "@fortawesome/free-solid-svg-icons";

import NavDropdown from "react-bootstrap/NavDropdown";
import { MDBContainer } from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="px-4 ">
      <Container fluid>
        <a href="/">
          <img
            src="https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-banyan-tree-logo-design-vector-png-image_6131481.png"
            style={{ width: "3.5rem" }}
            alt=""
          />
        </a>
        <h5>

        GLOBAL GREENERY
        </h5>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse style={{ flexGrow: "0" }} id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Nav.Link className={classes.navlink} href="#action1"><FontAwesomeIcon icon={faTree} size="3x"/></Nav.Link> */}
            {/* <Nav.Link className={classes.navlink} href="#action1"><img src="https://www.freeiconspng.com/thumbs/tree-icon/clean-energy-tree-icon-copy-9.png" style={{width:"2.5rem"}} alt="" /></Nav.Link> */}
            <Nav.Link className={classes.navlink_} href="/">
              HOME
            </Nav.Link>
            {/* <Nav.Link className={classes.navlink} href="#action2">
              GALLERY
            </Nav.Link>
            <Nav.Link className={classes.navlink} href="#action2">
              CONTACT US
            </Nav.Link>
            <Nav.Link className={classes.navlink} href="#action2">
              ABOUT US
            </Nav.Link>
            <Nav.Link className={classes.navlink} href="#action2">
              TESTIMONIALS
            </Nav.Link> */}
            {/* <Nav.Link className={classes.navlink} href="#action2"><i className="fa-solid fa-cart-circle-plus"></i></Nav.Link> */}
          </Nav>
          {/* <Form className="d-flex">
            <MDBContainer className="py-0">
              <div>
                <div style={{ border: "2px solid black", borderRadius: "6px" }}>
                  <input
                    style={{ border: "none" }}
                    type="text"
                    className={classes.search_click}
                    placeholder="search here..."
                  />
                  <FontAwesomeIcon icon={faSearch} size="1x" />
                </div>
              </div>
            </MDBContainer>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
