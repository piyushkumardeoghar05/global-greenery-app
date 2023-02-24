import React, { useEffect, useState } from "react";
import axios from "./api";
import Navbar from "./navbar";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Login = () => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [dataInput, setDataInput] = useState("");
  const [id, setId] = useState(null);
  const [isSignIn, setIsSignIn] = useState(false);
  // const [error,setError] = useState(false)
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const submitThis = async (e) => {
    e.preventDefault();
    setIsSignIn(true);
    const { email, password } = e.target.elements;
    let conFom = {
      email: email.value,
      password: password.value,
    };
    console.log(conFom);
    axios
      .post("/user/login", conFom)
      .then((res) => {
        // if (res.data) {
        //   console.log(res.data["user"]._id);
        //   setId(res.data["user"]._id);
        //   navigate(`/profile/${res.data["user"]._id}`);
        // } else {
        //   console.log("wrong user credentials");
        //   setError(true);
        // }
        if (res.data.successMessage) {
          console.log(res.data["user"]._id);
          setId(res.data["user"]._id);
          setIsSignIn(false);
          navigate(`/profile/${res.data["user"]._id}`);
        } else {
          console.log(res.data.errorMessage);
          setIsSignIn(false);
          setError(res.data.errorMessage);
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
      {/* // <div>
    // 	<form action="" onSubmit={submitThis}>
    // 		<div>
    // 			<label htmlFor="email">Email</label>
    // 			<input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    // 		</div>
    // 		<div>
    // 			<label htmlFor="passw">Password</label>
    // 		<input type="text" name="passw" id="passw" value={passw} onChange={(e)=>setPassw(e.target.value)}/>
    // 		</div>
    // 		<button type="submit">Login</button>
    // 	</form>
    // </div> */}
      <Navbar />
      <section className="vh-100">
        <div className="container py-0 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <h1 className="title" style={{ marginTop: "0.1rem" }}>
              SIGN IN
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
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" for="form1Example23">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" for="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <a href="/forgotPassword">Forgot password?</a>
                  <a href="/signup/0/0">Sign up</a>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  <>Sign in</>
                  {isSignIn &&
                   (
                    <>
                      <div style={{textAlign:"center",display:"inline",marginLeft:"5px"}}>
                 <svg style={{width: '40px'}} version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 100 100" enable-background="new 0 0 0 0" xmlSpace="preserve">
                            <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                            <animateTransform 
                                attributeName="transform" 
                                attributeType="XML" 
                                type="rotate"
                                dur="1s" 
                                from="0 50 50"
                                to="360 50 50" 
                                repeatCount="indefinite" />
                        </path>
                        </svg>
                        </div>
                    </>
                  )}
                </button>
                {/* {error && <h5 style={{color:"red"}}>wrong user credentials</h5>} */}
                <h5 style={{ color: "red" }}>{error}</h5>

                {/* <Link
                  to={`/profile/${id}`}
                  type="button"
                  className="btn login_btn bg-info"
                >
                  Login
                </Link> */}
                {/* <a
                  href={`/profile/${id}`}
                  className="btn btn-primary btn-lg btn-block"
                >
                  Log in
                </a> */}

                {/* <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <a className="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#3b5998"}} href="#!"
            role="button">
            <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
          </a>
          <a className="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#55acee"}} href="#!"
            role="button">
            <i className="fab fa-twitter me-2"></i>Continue with Twitter</a> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
