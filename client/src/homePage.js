import Testimonials from "./testimonials";
import Navbar from "./navbar";
import Slider from "./slider";
import Team from "./team";
import Cards from "./cards";
import ContactForm from "./contactus";
import Footer from "./footer";
import classes from "./contactus.module.css";
import LandingPage from "./landingPage";
import Navbar2 from "./navbar2";
const HomePage = () => {
    return ( 
        <>
        <div className={classes.app}>
        <Navbar2 />
        <LandingPage />
        <Cards />
        <Slider />
        <Team />
        <ContactForm />
        <Testimonials />
        <Footer />
      </div></>
     );
}
 
export default HomePage;