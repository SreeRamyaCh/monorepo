//Import the Express Library.
const express = require("express");
//Initialize a server side app.
const app = express();
//Define a port address.
const port = 5000;
//Listen the app on port.
app.listen(port, () =>{
  console.log(`Server started in port ${port}.`)
})