const express = require("express");
const mongoose = require("mongoose");
const app = express();
var cors = require("cors");

app.use(cors());
app.use(express.json());
const contactUsRouter = require("./Routes/contactUsRouter");
const topThreeCardsRouter = require("./Routes/topThreeCardsRouter");
const ourTeamRouter = require("./Routes/ourTeamRouter");
const userRouter = require("./Routes/userRouter");
const galleryRouter = require("./Routes/galleryRouter");
const testimonialsRouter = require("./Routes/testimonialsRouter");
const uri =
  "mongodb+srv://global_greenery:AMSLhK6Hsreknhjy@cluster0.dx9squ7.mongodb.net/?retryWrites=true&w=majority";
const port = 5000;
mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

app.use("/contactUs", contactUsRouter);
app.use("/topThreeCards", topThreeCardsRouter);
app.use("/ourTeam", ourTeamRouter);
app.use("/testimonials", testimonialsRouter);
app.use("/user", userRouter);
app.use("/gallery", galleryRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
