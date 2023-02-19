const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectionString = require("./config/db");

//dotenv config
dotenv.config();

//Mongodb connection
connectionString();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/users", require("./routes/userRouters"));

//port
const port = process.env.PORT || 8080;

//listen to port
app.listen(port, () => {
  console.log(
    `server is running in  ${process.env.NODE_MODE} mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
