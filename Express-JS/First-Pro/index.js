const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log(`Successfully Server Run on 3000`);
});

app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

app.get("/user/:userid/book/:bookid", (req, res) => {
  res.send(`User name is: ${req.params.userid}`);
});
