const userModel = require("../Models/userModel");
// const cookieParser = require("cookie-parser");
// const express = require("express");
// const app = express();
// app.use(cookieParser());
const { MailSender } = require("../utility/nodemailer");
exports.forgotPassword = async (req, res, next) => {
  try {
    let { email } = req.body;
    console.log(email);
    let user = await userModel.findOne({ email: email });
    console.log(user);
    if (user) {
      let id = user._id;
      let resetPassswordLink = `http://localhost:3000/resetPassword/${id}`;
      console.log(resetPassswordLink);
      let myObj = {
        name: user.name,
        email: email,
        resetPassswordLink: resetPassswordLink,
      };
      MailSender("forgotPassword", myObj);
      return res.json({
        successMessage: "success",
        user: user,
      });
    } else {
      // return res.send(null);
      return res.json({
        errorMessage:"Email id is not registered"
      })
    }
  } catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};
exports.createUser = async (req, res, next) => {
  try {
    let user = await userModel.create(req.body);

    console.log("User created");
    console.log(user);
    MailSender("signup", user);
    return res.json({
      successMessage: "User created",
      user: user,
    });
  } catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};
exports.login = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email: email });
    console.log(user);
    if (user) {
      if (password == user.password) {
        // res.setHeader('Set-Cookie', 'isLoggedin=true');
        res.setHeader('Set-Cookie', 'isLoggedin=true; HttpOnly');
        if(user.role=='admin' || user.role =='superadmin'){
          res.setHeader('Set-Cookie', 'isAdmin=true; HttpOnly');
        }
        console.log("User login successsful");

        return res.json({
          successMessage: "User login successful",
          user: user,
        });
      } else {
        console.log(password, user.password);
        console.log("Wrong Password");
        // return res.send(null);
        return res.json({
          errorMessage: "Wrong password",
        });
      }
    } else {
      console.log("No such email id exists");
      // return res.send(null);

      return res.json({
        errorMessage: `No account is associated with this email id, please signUp first`,
      });
    }
  } catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};
exports.logout = async(req,res,next)=>{
  try{
    let cookies = {};
    if (req.headers.cookie) {
      const cookiesArray = req.headers.cookie.split(";");

      cookiesArray.forEach((cookie) => {
        const [key, value] = cookie.trim().split("=");
        cookies[key] = value;
      });
      console.log(cookies);
      console.log(cookies["isLoggedin"]);
      // res.json(cookies);
      // console.log(req.cookies);
      if (cookies["isLoggedin"]=='true') {
        res.setHeader('Set-Cookie', 'isLoggedin=false;HttpOnly');
        // console.log("user logged in verified");
        // next();
      }
      if(cookies['isAdmin']=='true'){

        res.setHeader('Set-Cookie', 'isAdmin=false; HttpOnly');
      }
      return res.json({
        successMessage:"You are successfully logged out"
      })
    }

  }catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }

}
exports.getUserById = async (req, res, next) => {
  try {
    const id = req.params["id"];
    console.log(id);
    let user = await userModel.findById(id);
    console.log(user);
    if (user) {
      return res.json({
        successMessage: "success",
        user: user,
      });
    } else {
      // return res.send(null);
      return res.json({
        errorMessage:"user not found"
      })
    }
  } catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};

exports.getAllUser = async (req, res, next) => {
  try {
    let users = await userModel.find();
    return res.json({
      successMessage: "All users retrieved",
      users: users,
    });
  } catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};
exports.deleteUser = async (req, res, next) => {
  try {
    const id = req.params["id"];
    console.log(id);
    let user = await userModel.findByIdAndDelete(id);
    if (user) {
      console.log("User Deleted");
      return res.json({
        successMessage: "success user deleted",
        user: user,
      });
    } else {
      console.log("No such user found");
      return res.json({
        errorMessage: "No such user found",
      });
    }
  } catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};
exports.updateUser = async (req, res, next) => {
  try {
    const id = req.params["id"];
    console.log(id);
    let user = await userModel.findById(id);
    const dataToBeUpdated = req.body;
    if (user) {
      const keys = [];
      for (let key in dataToBeUpdated) {
        keys.push(key);
      }
      for (let i = 0; i < keys.length; i++) {
        user[keys[i]] = dataToBeUpdated[keys[i]];
      }
      const updatedData = await user.save();

      // res.send("User updated");
      console.log("User updated");
      return res.json({
        successMessage: "success user updated",
        user: user,
      });
    } else {
      console.log("No such user found");
      return res.json({
        errorMessage: "no such user found",
      });
    }
  } catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};

exports.isAuthenticated = async (req, res, next) => {
  try {
    let cookies = {};
    if (req.headers.cookie) {
      const cookiesArray = req.headers.cookie.split(";");

      cookiesArray.forEach((cookie) => {
        const [key, value] = cookie.trim().split("=");
        cookies[key] = value;
      });
      console.log(cookies);
      console.log(cookies["isLoggedin"]);
      // res.json(cookies);
      // console.log(req.cookies);
      if (cookies["isLoggedin"]=='true') {
        console.log("user logged in verified");
        next();
      }
      else{
        return res.json({
          errorMessage: "Operation not allowed",
        });
      }
    }
    // console.log("Is Logged In");
    else {
      // console.log("Operation not allowed");
      return res.json({
        errorMessage: "Operation not allowed",
      });
    }
  } catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};
exports.isAdmin = async (req, res, next) => {
  try {
    let cookies = {};
    if (req.headers.cookie) {
      const cookiesArray = req.headers.cookie.split(";");

      cookiesArray.forEach((cookie) => {
        const [key, value] = cookie.trim().split("=");
        cookies[key] = value;
      });
      console.log(cookies);
      // res.json(cookies);
      // console.log(req.cookies);
      if (cookies["isAdmin"]=='true') {
        console.log("Admin logged in verified");
        next();
      }
    }
    // console.log("Is Logged In");
    else {
      // console.log("Operation not allowed");
      return res.json({
        errorMessage: "Operation not allowed",
      });
    }
  } catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};
// exports.forgotPassword = async (req, res, next) => {
//   const { email } = req.body;
//   // const dataToUpdate =
//   const user = await userModel.findOne({ email: email });
// };

// exports.setCookie = async (req,res,next)=>{
//   // res.cookie('loggedIn',true);
//   res.setHeader('Set-Cookie','isLoggedIn = true');
//   // res.setHeader('Set-Cookie','lang = js');
//   res.send("User logged in");

// }
// exports.getCookie = async (req,res,next)=>{
//   let cookies = {};

//     const cookiesArray = req.headers.cookie.split(';');

//     cookiesArray.forEach((cookie) => {
//         const [key, value] = cookie.trim().split('=');
//         cookies[key] = value;
//     });
// console.log(cookies);
//     res.json(cookies);

// }