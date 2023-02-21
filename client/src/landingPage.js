import React, { Component } from "react";
import classes from "./landingPage.module.css";
import Nav from 'react-bootstrap/Nav';
export default function LandingPage() {
  return (
    <>
    <div id="Home">
      <main className={classes.hero_section}>
        <section className={classes.container}>
          <div className={classes.hero_content}>
            {/* <nav className={classes.navbar}>
              <h1 className={classes.nav_logo}>
                {" "}
                <img
                  src="https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-banyan-tree-logo-design-vector-png-image_6131481.png"
                  style={{ width: "6.5rem" }}
                  alt=""
                />
              </h1>
              <ul className={classes.nav_links}>
              <Nav.Link className={classes.navlink} href="#action1">HOME</Nav.Link>
            <Nav.Link className={classes.navlink}  href="#action2">GALLERY</Nav.Link>
            <Nav.Link className={classes.navlink} href="#action2">CONTACT US</Nav.Link>
            <Nav.Link className={classes.navlink} href="#action2">ABOUT US</Nav.Link>
            <Nav.Link className={classes.navlink} href="#action2">TESTIMONIALS</Nav.Link>
              </ul>
            </nav> */}
            <div className={classes.hero_text}>
              <h2 className={classes.hero_welcome_text}>Welcome To</h2>
              <h2 className={classes.hero_country}>GLOBAL</h2>
              <h2 className={classes.hero_country}>GREENERY</h2>
              <p className={classes.hero_text_description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                error quasi molestias in ipsam non asperiores adipisci
                voluptatem.
              </p>
              <button className={classes.explore_btn}><a style={{textDecoration:"none",color:"black"}} href="#Gallery">Explore</a></button>
            </div>
          </div>
        </section>
      </main>
      </div>
    </>
  );
}
