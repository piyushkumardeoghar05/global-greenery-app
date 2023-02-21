import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleUp,
  faEnvelope,
  faGem,
  faHome,
  faPhone,
  faPrint,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div id="Footer">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5 pt-3">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <a href="#top">
                <img
                  src="https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-banyan-tree-logo-design-vector-png-image_6131481.png"
                  style={{ width: "6.5rem" }}
                  alt=""
                />
              </a>
                <h5 className="text-uppercase fw-bold mb-4">
                  GLOBAL GREENERY
                </h5>
                <p style={{fontSize:"1.1rem"}}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veniam quod asperiores hic sit sunt provident maiores, sequi
                  
                </p>
              </MDBCol>

              {/* <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </MDBCol> */}

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#top" className="text-reset h6" >
                    Home
                  </a>
                </p>
                <p>
                  <a href="#Goals" className="text-reset h6">
                    Goal
                  </a>
                </p>
                <p>
                  <a href="#Teams" className="text-reset h6">
                    Our Team
                  </a>
                </p>
                <p>
                  <a href="#ContactUs" className="text-reset h6">
                    Contact Us
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <FontAwesomeIcon icon={faHome} size="1x" className="mx-1"/>
                   <span>New York, NY 10012, US</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} size="1x" className="mx-1" />
                   <span>info@example.com</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} size="1x" /> + 01 234 567 88
                </p>
                <p>
                  <FontAwesomeIcon icon={faPrint} size="1x" /> + 01 234 567 89
                </p>
            
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <hr />
        <section className="d-flex justify-content-center justify-content-lg-between pb-3  border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span style={{fontSize:"1.2rem"}}>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="/" className="me-4 text-reset">
              <FontAwesomeIcon icon={faFacebookF} size="2x" color="blue"  />
            </a>
            <a href="/" className="me-4 text-reset">
              <FontAwesomeIcon icon={faTwitter} size="2x" color="skyblue"/>{" "}
            </a>
            <a href="/" className="me-4 text-reset">
              <FontAwesomeIcon icon={faGoogle} size="2x" color="red" />
            </a>
            <a href="/" className="me-4 text-reset">
              <FontAwesomeIcon icon={faInstagram} size="2x" color="purple" />
            </a>
            <a href="/" className="me-4 text-reset">
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="blue"  />
            </a>
            <a href="/" className="me-4 text-reset">
              <FontAwesomeIcon icon={faGithub} size="2x"  color="black"/>
            </a>
            <a href="#top" className="me-4 text-reset">
              <FontAwesomeIcon icon={faArrowAltCircleUp} size="2x"  color="black"/>
            </a>
          </div>
        </section>
      </MDBFooter>
    </div>
  );
}
