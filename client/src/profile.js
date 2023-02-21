import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "./api";
import {
  faFacebookF,
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./style.css";
import { faPencil, faPenClip } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import Signup from "./signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function PersonalProfile() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(()=>{

    axios.get(`/user/${id}`).then((res) => {
      console.log(res.data["user"]);
      setData(res.data["user"]);
    });
  },[])

  return (
    <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
              <MDBRow className="g-0">
                <MDBCol
                  md="4"
                  className="gradient-custom text-center text-white"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar"
                    className="my-5"
                    style={{ width: "80px" }}
                    fluid
                  />
                  <MDBTypography tag="h5">{data.name}</MDBTypography>
                  <MDBCardText>{data.por}</MDBCardText>
                  {/* <MDBIcon far icon="edit mb-5" /> */}
                  <a href={`/signup/${id}/1`}>

                  <FontAwesomeIcon icon={faPencil} size="1x" color="white" />
                  </a>
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">PROFILE</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">
                          {data.email}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">
                          {data.cellphone}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">
                          Position of Responsibility
                        </MDBTypography>
                        <MDBCardText className="text-muted">
                          {data.por}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">
                          {data.cellphone}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      <a href="#">
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          size="1x"
                          color="blue"
                          style={{ margin: "10px" }}
                        />
                      </a>
                      <a href="#">
                        <FontAwesomeIcon
                          icon={faTwitter}
                          size="1x"
                          color="blue"
                          style={{ margin: "10px" }}
                        />
                      </a>
                      <a href="#">
                        <FontAwesomeIcon
                          icon={faInstagram}
                          size="1x"
                          color="blue"
                          style={{ margin: "10px" }}
                        />
                      </a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
