import React, { useEffect, useState } from "react";
import axios from "./api";
import Navbar from "./navbar";
import { Link, useNavigate } from "react-router-dom";
import { faL } from "@fortawesome/free-solid-svg-icons";
// import nodemailer from 'nodemailer'
// import MailSender from "../../backend/utility/nodemailer";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [dataInput, setDataInput] = useState("");
  const [id, setId] = useState(null);
  const [error, setError] = useState("");
  const [success,setSuccess] = useState("");
  const navigate = useNavigate();
  const [issent,setIssent] = useState(false);
  const submitThis = async (e) => {
    e.preventDefault();
    setIssent(true);
    const { email } = e.target.elements;
    let conFom = {
      email: email.value,
    };
    console.log(conFom);
    axios
      .post("/user/forgotPassword", conFom)
      .then((res) => {
        if (res.data.successMessage) {
          console.log("code is sent on your email");
          setIssent(false);
          setSuccess("Reset Link has been successfully sent to your registered Email Id,Please check your Email");
          // setId(res.data["user"]._id);
          //   navigate(`/profile/${res.data["user"]._id}`);
          setError(res.data.errorMessage);
        } else {
          console.log("Email not registered");
          setIssent(false);
          setError(res.data.errorMessage);
          setSuccess("");
        }
      })
      .catch((err) => console.log(err));
    // const info={email:email,passw:passw};
    // setDataInput([info]);
    // console.log(info);
  };
  // useEffect(()=>{
  //   setError(false)
  // },[])
useEffect(()=>{
  setError("");
},[])

  return (
    <>
      <Navbar />
      <section className="vh-100">
        <div className="container py-0 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <h1 className="title" style={{ marginTop: "0.1rem" }}>
              FORGOT PASSWORD
            </h1>
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={submitThis}>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form1Example13">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Send Reset Code {issent && (
                    <>
                     <div
                                style={{
                                  textAlign: "center",
                                  display: "inline",
                                  marginLeft: "5px",
                                }}
                              >
                                <svg
                                  style={{ width: "40px" }}
                                  version="1.1"
                                  id="L9"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 100 100"
                                  enable-background="new 0 0 0 0"
                                  xmlSpace="preserve"
                                >
                                  <path
                                    fill="#fff"
                                    d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                                  >
                                    <animateTransform
                                      attributeName="transform"
                                      attributeType="XML"
                                      type="rotate"
                                      dur="1s"
                                      from="0 50 50"
                                      to="360 50 50"
                                      repeatCount="indefinite"
                                    />
                                  </path>
                                </svg>
                              </div>
                    </>
                  )}
                </button>
                {/* {error && ( */}
                  <h5 style={{ color: "red" }}>
                    {error}{" "}
                   
                  </h5>
                {/* // )} */}
                {/* {success && ( */}
                  <h5 style={{ color: "red" }}>
                    {success} {" "}
                  </h5>
                {/* )} */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ForgotPassword;
