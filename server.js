var express = require('express');
const jwt = require("jsonwebtoken");
const cors = require("cors");

const User = require("./routes/User");

var app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/user", User);


app.listen("3500", () => {
      console.log("Server is listening on port 3500");
    });