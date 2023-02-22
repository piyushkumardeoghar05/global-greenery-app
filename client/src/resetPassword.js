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
const ResetPassword = () => {
  let { id } = useParams();
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
  const [error, setError] = useState("");
  // const [initialEmail, setInitialEmail] = useState("");
  // console.log("upadte is going on");
  // try {
  //   axios.get(`/user/${id}`).then((res) => {
  //     console.log(res.data.user.email);
  //     console.log(res.data.user.name);
  //   });
  // } catch (err) {
  //   if (err) console.log(err.message);
  // }

  const submitForm = (e) => {
    e.preventDefault();
    const { password, conpass } = e.target.elements;
    let conFom = {
      password: password.value,
      confirmPassword: conpass.value,
    };

    //   console.log("upadte is going on");
    try {
      axios.patch(`/user/resetPassword/${id}`, conFom).then((res) => {
        if (res.data.successMessage) {
          console.log(res.data.user);
          console.log("password successfully changed");
          alert("Your Password has been changed");
          navigate(`/login`);
        } else {
          setError(res.data.errorMessage);
        }

        // setInitialEmail(res.data.user.email);
      });
    } catch (err) {
      if (err) console.log(err.message);
    }
  };
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
                      RESET PASSWORD
                    </p>

                    <form className="mx-1 mx-md-4" onSubmit={submitForm}>
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
                          />
                          <label className="form-label" for="password">
                            New Password
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
                          />
                          <label className="form-label" for="conpass">
                            Confirm password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Reset Password
                          {/* Register */}
                        </button>
                      </div>
                      <h5 style={{ color: "red" }}>{error}</h5>
                      {/* {isRegistered == 2 && (
                        <>
                          <div style={{ color: "red" }}>
                            Successfully registerd Please login{" "}
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

export default ResetPassword;
