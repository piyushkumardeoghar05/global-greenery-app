import "./st.css";
import React, { useState, useEffect } from "react";
import axios from "./api";
import { faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Team() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  const [test,setTest] = useState(true);
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const [StudData, setStudData] = useState([]);
  useEffect(()=>{

    axios.get("/ourTeam/getOurTeam").then((res) => {
      // console.log(res.data["teamMembers"]);
      setStudData(res.data["teamMembers"]);
      setTest(false);
    });
  },[])

  // const StudData = [
  //   {
  //     src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     name: "ABCHS",
  //     pos: "Executive Head",
  //     fb: "/",
  //     insta: "/",
  //     linkedin: "/",
  //     mail: "/",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     name: "ABCHS",
  //     pos: "Executive Head",
  //     fb: "/",
  //     insta: "/",
  //     linkedin: "/",
  //     mail: "/",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     name: "ABCHS",
  //     pos: "Executive Head",
  //     fb: "/",
  //     insta: "/",
  //     linkedin: "/",
  //     mail: "/",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     name: "ABCHS",
  //     pos: "Executive Head",
  //     fb: "/",
  //     insta: "/",
  //     linkedin: "/",
  //     mail: "/",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     name: "ABCHS",
  //     pos: "Executive Head",
  //     fb: "/",
  //     insta: "/",
  //     linkedin: "/",
  //     mail: "/",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     name: "ABCHS",
  //     pos: "Executive Head",
  //     fb: "/",
  //     insta: "/",
  //     linkedin: "/",
  //     mail: "/",
  //   },

  // ];
  // console.log(StudData);
  return (
    <>
      <div className="container" id="Teams">
        <motion.div
          className="box"
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          <h1 className="title d-flex justify-content-center">Our Team</h1>
              <div style={{textAlign:"center"}}>
                {test && <svg style={{width: '10vw'}} version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                        </svg>}
                        </div>
          <div class="demo">
            <div class="container">
              <div class="row">
                {StudData.map((ele, i) => {
                  return (
                    <>
                      <div class="col-md-4 my-4 col-sm-6">
                        <div class="our-team">
                          <div class="team_img">
                            <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                            <ul class="social">
                              <li>
                                <a href={ele.fb} target="_blank">
                                  {/* <i class="fab fa-facebook"></i> */}
                                  <FontAwesomeIcon icon={faFacebookF} />
                                  {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
                                </a>
                              </li>
                              <li>
                                <a href={"mailto: " + ele.mail}>
                                  <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                              </li>
                              <li>
                                <a href={ele.linkedin}>
                                  <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                              </li>
                              <li>
                                <a href={ele.insta}>
                                  <FontAwesomeIcon icon={faInstagram} />
                                </a>
                              </li>
                              <li>
                                <a href={"tel:" + ele.insta}>
                                  <FontAwesomeIcon icon={faPhone} />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="team-content">
                            <h3 class="title">{ele.name}</h3>
                            <span class="post">{ele.pos}</span>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Team;
