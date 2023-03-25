const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const morgan = require("morgan");

const swaggerDocs = require("./helpers/swagger");
const User = require("./routes/User");
const Assessment = require("./routes/Assessment");
const Trial = require("./routes/Trial");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/user", User);
app.use("/assessment", Assessment);
app.use("/trial", Trial);

const PORT = process.env.PGPORT || 3500;

const startServer = async () => {
  try {
    await app.listen(PORT);
    console.log(`Server is listening on port ${PORT}`);
  } catch (error) {
    console.error(error);
  }
};

swaggerDocs(app, PORT);
startServer();
