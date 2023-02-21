import React from "react";
import axios from "./api";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import classes from "./contactus.module.css";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const ContactForm = () => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  const [formStatus, setFormStatus] = useState("Send");
  const onSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    axios
      .post("/contactUs", conFom)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    console.log(conFom);
    setFormStatus("Submitted");
  };
  return (
    <div className="conatiner" id="ContactUs">
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <div
          className="container w-75 pt-1 pb-5 my-5 px-5"
          style={{
            backgroundColor: "rgb(215 215 215 / 93%)",
            borderRadius: "30px",
          }}
        >
          <div className="container mt-5 ">
            <h1 className="title d-flex justify-content-center">Contact Us</h1>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea className="form-control" id="message" required />
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-danger" type="submit">
                  {formStatus}
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default ContactForm;
