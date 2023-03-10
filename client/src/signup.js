import { react, useState, useEffect } from "react";
import axios from "./api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./navbar";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import {
  faUser,
  faSignIn,
  faEnvelope,
  faLock,
  faKey,
  faPhone,
  faBuilding,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
const SignUp = () => {
  let { id, toUpdate } = useParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [conpass, setConpass] = useState("");
  const [isRegistered, setIsRegistered] = useState(1);
  const [initialEmail, setInitialEmail] = useState("");
  const [initialname, setInitialName] = useState("");
  const [initialpor, setInitialPor] = useState("");
  const [initialimgLink, setInitialImgLink] = useState("");
  const [initialPhone, setInitialPhone] = useState("");
  const [initialpassword, setInitialPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  // const [changepass, setChangePass] = useState(false);
  // const [initialEmail, setInitialEmail] = useState("");
  useEffect(() => {
    if (toUpdate == "1") {
      console.log("update is going on");
      try {
        axios.get(`/user/${id}`).then((res) => {
          if (!res.data.user) {
            navigate(`*`);
          }
          console.log(res.data.user.email);
          console.log(res.data.user.name);
          setInitialEmail(res.data.user.email);
          setInitialName(res.data.user.name);
          setInitialPor(res.data.user.por);
          setInitialImgLink(res.data.user.imgLink);
          setInitialPhone(res.data.user.cellphone);
          setInitialPassword(res.data.user.password);
        });
      } catch (err) {
        if (err) console.log(err.message);
      }
    }
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    setIsSignup(true);
    const { name, email, password, conpass, por, imgLink, phone } =
      e.target.elements;
    let conFom = {
      email: email.value,
      password: password.value,
      confirmPassword: conpass.value,
      name: name.value,
      por: por.value,
      imgLink: imgLink.value,
      cellphone: phone.value,
    };

    if (toUpdate == "1") {
      console.log("upadte is going on");
      try {
        axios.patch(`/user/${id}`, conFom).then((res) => {
          if (res.data.successMessage) {
            console.log(res.data.user.email);
            setIsSignup(false);
            alert("Profile Successfully updated");
            navigate(`/profile/${res.data["user"]._id}`);
          } else {
            setIsSignup(false);
            setError(res.data.errorMessage);
          }
          // setInitialEmail(res.data.user.email);
        });
      } catch (err) {
        if (err) console.log(err.message);
      }
    } else {
      console.log("new user creation is going on");
      try {
        axios.post("/user", conFom).then((res) => {
          console.log(res);
          if (res.data.successMessage) {
            alert("Succcessfully registered, Now please sign in");
            setIsSignup(false);
            navigate(`/login`);
          } else {
            setIsSignup(false);
            setError(res.data.errorMessage);

          }
        });
        console.log(conFom);
        // setIsRegistered(2);
      } catch (err) {
        if (err) {
          console.log(err.message);
          // setIsRegistered(0);
        }
      }
    }
  };
  const handleChange = () => {
    if (isDisabled) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  // const handleChange = ()=>{
  //   if(changepass){
  //     setChangePass(true);
  //     setIsDisabled(false);

  //   }
  //   else{
  //     setChangePass(false);
  //     setIsDisabled(true);
  //   }
  // }
  // const handleBtnClick=()=>{
  //   if(isRegistered==2){
  //     return(
  //       <div>
  //        Successfully registerd Please login
  //       </div>
  //     )}
  //     else if(isRegistered==0){
  //       return(
  //         <div>
  //           Error occured please try again
  //         </div>
  //       )
  //     }

  // }
  return (
    <>
      <Navbar />
      {/* <section className="" style={{ backgroundColor: "#eee" }}> */}
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      {toUpdate == "0" ? <>SIGN UP</> : <>Update Profile</>}
                    </p>

                    <form className="mx-1 mx-md-4" onSubmit={submitForm}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon
                          icon={faUser}
                          fontSize="large"
                          className="mx-4 mb-4"
                        />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="name"
                            className="form-control"
                            // placeholder={initialname}
                            defaultValue={initialname}
                          />
                          <label className="form-label" for="name">
                            {toUpdate == "0" ? (
                              <>Your Name</>
                            ) : (
                              <>Update Name</>
                            )}{" "}
                          </label>
                        </div>
                      </div>
                      {toUpdate == "1" ? (
                        <>
                          <div className="d-flex flex-row align-items-center mb-4">
                            {/* <i className="fas fa-envelope fa-lg me-3 fa-fw"></i> */}
                            <FontAwesomeIcon
                              icon={faEnvelope}
                              fontSize="large"
                              className="mx-4 mb-4"
                            />
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="email"
                                className="form-control"
                                value={initialEmail}
                                disabled
                              />
                              <label className="form-label" for="email">
                                Your Email
                              </label>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="d-flex flex-row align-items-center mb-4">
                            {/* <i className="fas fa-envelope fa-lg me-3 fa-fw"></i> */}
                            <FontAwesomeIcon
                              icon={faEnvelope}
                              fontSize="large"
                              className="mx-4 mb-4"
                            />
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="email"
                                className="form-control"
                              />
                              <label className="form-label" for="email">
                                Your Email
                              </label>
                            </div>
                          </div>
                        </>
                      )}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon
                          icon={faPhone}
                          fontSize="large"
                          className="mx-4 mb-4"
                        />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="number"
                            id="phone"
                            className="form-control"
                            // placeholder={initialname}
                            defaultValue={initialPhone}
                          />
                          <label className="form-label" for="name">
                            {toUpdate == "0" ? (
                              <>Phone No.</>
                            ) : (
                              <>Update Phone No.</>
                            )}{" "}
                          </label>
                        </div>
                      </div>{" "}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon
                          icon={faBuilding}
                          fontSize="large"
                          className="mx-4 mb-5 Pb-4"
                        />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="por"
                            className="form-control"
                            // placeholder={initialname}
                            defaultValue={initialpor}
                          />
                          <label className="form-label" for="name">
                            {toUpdate == "0" ? (
                              <>Position of Responsibility in company</>
                            ) : (
                              <>Update Position of Responsibility in company</>
                            )}{" "}
                          </label>
                        </div>
                      </div>{" "}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon
                          icon={faImage}
                          fontSize="large"
                          className="mx-4 mb-4"
                        />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="imgLink"
                            className="form-control"
                            // placeholder={initialname}
                            defaultValue={initialimgLink}
                          />
                          <label className="form-label" for="name">
                            {toUpdate == "0" ? (
                              <>Profile Photo Link</>
                            ) : (
                              <>Update Profile Photo Link</>
                            )}{" "}
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon
                          icon={faLock}
                          fontSize="large"
                          className="mx-4 mb-4"
                        />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            defaultValue={initialpassword}
                          />
                          <label className="form-label" for="password">
                            {toUpdate == "0" ? (
                              <>Password</>
                            ) : (
                              <>Update Password</>
                            )}
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon
                          icon={faKey}
                          fontSize="large"
                          className="mx-4 mb-4"
                        />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="conpass"
                            className="form-control"
                            defaultValue={initialpassword}
                          />
                          <label className="form-label" for="conpass">
                            Confirm password
                          </label>
                        </div>
                      </div>
                      <>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            for="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#">Terms of service</a>
                          </label>
                        </div>
                      </>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                          disabled={!isDisabled}
                        >
                          {console.log(toUpdate)}
                          {toUpdate == "0" ? (
                            <>Register</>
                          ) : (
                            <>Update Profile</>
                          )}
                          {isSignup && (
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
                          {/* Register */}
                        </button>
                      </div>
                      <h5 style={{ color: "red" }}>{error}</h5>
                      {/* {isRegistered == 2 && (
                        <>
                          <div style={{ color: "red" }}>
                            Successfully registerd Please{" "}
                            <a href="/login">login</a>{" "}
                          </div>
                        </>
                      )}
                      {isRegistered == 0 && (
                        <>
                          <div style={{ color: "red" }}>
                            Error occured please try again{" "}
                          </div>
                        </>
                      )} */}
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </>
  );
};

export default SignUp;
