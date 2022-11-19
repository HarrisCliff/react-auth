const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./Routes/auth");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

app.use(
  cookieSession({
    name: "session",
    keys: ["Harris"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/", authRoute);
app.use("/auth", authRoute);

const CONNECTION_URL =
  "mongodb+srv://HarrisCliff:Madaliso7595@cluster0.s0vrzkx.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Db connected and Server running on port ${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));
