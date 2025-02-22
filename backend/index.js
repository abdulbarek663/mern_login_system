const express = require("express");
const app = express(); // initialize express
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
const ProductRouter = require("./Routes/ProductRouter");

require("dotenv").config();
require("./Models/db");
const PORT = process.env.PORT || 8080;

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);
//app.use("/products", ProductRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

// body-parser help to fetch data from clint-side and pass to server side so its add to middleware

/* cors help to connect front end with backend . if you want to allow only perticular site than pass configuration object . LIKE:-> 

/ app.use(cors([Give that ip ADDRESSes as a array here...])); this is secure and perticular server can request only 

/ app.use(cors()); this is open that mean any one can request to our server . It is not secure

*/
