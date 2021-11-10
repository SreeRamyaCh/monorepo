//Import the Express Library.
const express = require("express");
//Initialize a server side app.
const app = express();
//Define a port address.
const port = 5000;

//Create a GET Path.
app.get("/", (req, res) =>{
  res.send("Hello Geeks");
});
app.post("/", (req, res) =>{
  res.send("Hello Ramya");
});
//Listen the app on port.
app.listen(port, () =>{
  console.log(`Server started in port ${port}.`)
});