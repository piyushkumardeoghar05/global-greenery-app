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
  const [error, setError] = useState(false);
  const [success,setSuccess] = useState(false);
  const navigate = useNavigate();
  const submitThis = async (e) => {
    e.preventDefault();
    const { email } = e.target.elements;
    let conFom = {
      email: email.value,
    };
    console.log(conFom);
    axios
      .post("/user/forgotPassword", conFom)
      .then((res) => {
        if (res.data) {
          console.log("code is sent on your email");
          setSuccess(true);
          // setId(res.data["user"]._id);
          //   navigate(`/profile/${res.data["user"]._id}`);
        } else {
          console.log("Email not registered");
          setError(true);
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
                  Send Reset Code
                </button>
                {error && (
                  <h5 style={{ color: "red" }}>
                    No such Email found, You are not registered please{" "}
                   
                  </h5>
                )}
                {success && (
                  <h5 style={{ color: "red" }}>
                    Reset Link has been successfully sent to your registered Email Id,Please check your Email {" "}
                  </h5>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ForgotPassword;
