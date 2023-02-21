import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login'
import SignUp from './signup';
import Profile from './profile'
import Navbar2 from './navbar2';
import ForgotPassword from './forgotPassword';
import ResetPassword from './resetPassword';
import Page404 from './404page';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Navbar2/> */}
    <BrowserRouter>
      <Routes>
       
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<App />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/signup/:id/:toUpdate" element={<SignUp />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />

          <Route path="/resetPassword/:id" element={<ResetPassword />} />
          <Route path="*" element={<Page404 />} />
       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
