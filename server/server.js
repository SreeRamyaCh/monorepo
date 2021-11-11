//Import the Express Library.
const express = require("express");
//Initialize a server side app.
const app = express();
//Define a port address.
const port = 5000;
//Import Routes.
const root = require("./routes/root");

//Use a Middleware to parse POST Data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Require Modular Routes.
app.use("/", root);

//Listen the app on port.
app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
