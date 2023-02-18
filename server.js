var express = require('express');
const jwt = require("jsonwebtoken");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc")

const User = require("./routes/User");
const Assessment = require("./routes/Assessment");

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'HealGratefully.com expressJs API.',
      version: '1.0.0',
    },
  },
  apis: ['./routes*.js'], // files containing annotations as above
};

const specification = swaggerJsdoc(options);

var app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/user", User);
app.use("/assessment", Assessment);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specification));


app.listen(process.env.PGPORT, () => {
      console.log("Server is listening on port", process.env.PGPORT);
    });