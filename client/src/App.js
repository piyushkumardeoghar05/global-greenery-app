import Testimonials from "./testimonials";
import Navbar from "./navbar";
import Slider from "./slider";
import Team from "./team";
import Cards from "./cards";
import ContactForm from "./contactus";
import Footer from "./footer";
// import classes from "./contactus.module.css";
import LandingPage from "./landingPage";
import Navbar2 from "./navbar2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import SignUp from "./signup";
import Profile from "./profile";
// import Navbar2 from './navbar2';
import ForgotPassword from "./forgotPassword";
import ResetPassword from "./resetPassword";
import Page404 from "./404page";
import HomePage from "./homePage";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/signup" element={<SignUp />} /> */}
            <Route path="/signup/:id/:toUpdate" element={<SignUp />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />

            <Route path="/resetPassword/:id" element={<ResetPassword />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
