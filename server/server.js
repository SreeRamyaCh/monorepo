//Import the Express Library.
const express = require("express");
//Initialize a server side app.
const app = express();
//Define a port address.
const port = 5000;

//Use a Middleware to parse POST Data.
app.use(express.json());

//Create a GET Path.
app.get("/", (req, res) => {
  let output = "Hello Geeks";
  if (Object.values(req.query).length > 0) {
    output += "Here's some queries:" + JSON.stringify(req.query, null, 2);
  }
  res.send(output);
});
app.post("/", (req, res) => {
  if (Object.values(req.query).length > 0) {
    output += "Here's some queries:" + JSON.stringify(req.query, null, 2);
  }
  if (Object.values(req.body).length > 0) {
    output += "Here's some body:" + JSON.stringify(req.body, null, 2);
  }
  res.send("Hello Ramya!!");
});
//Listen the app on port.
app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
