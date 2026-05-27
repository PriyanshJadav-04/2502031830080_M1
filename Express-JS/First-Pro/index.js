const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log(`Successfully Server Run on 3000`);
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const users = [
    {
      id: 1,
      name: "Sooyaa",
    },
    {
      id: 2,
      name: "Priyansh",
    },
  ];
  res.json({
    name: "Priyansh",
    age: 20,
  });
});

app.get("/send", (req, res) => {
  res.send({
    name: "Send",
    age: 20,
  });
});

app.get("/hello", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

// app.get("/user/:userid/book/:bookid", (req, res) => {
//   res.send(`User name is: ${req.params.userid}`);
// });

app.get("/name/:nameid", (req, res) => {
  res.send(`Your Name is: ${req.params}`);
});

app.get("/search", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;

  res.send(`Search result for the name: ${name} and for age: ${age}`);
});

app.get("/index", (req, res) => {
  res.redirect("/data");
});

app.get("/data", (req, res) => {
  res.send(`<h1>This is data redirect from the index</h1>`);
});

app.get("/google", (req, res) => {
  res.redirect(303, "https://www.google.com/");
});

app.get("/user", (req, res) => {
  res.render("user");
});

app.get("/download", (req, res) => {
  res.download(
    "./download/Franz Kafka - The Metamorphosis.pdf",
    "Document.pdf",
  );
});

app.get("/sendFile", (req, res) => {
  res.sendFile(__dirname + "/download/Franz Kafka - The Metamorphosis.pdf");
});

app.get("/end", (req, res) => {
  res.write("This is testing");
  res.end();
});

app.get("/error", (req, res) => {
  res.sendStatus(404);
});

app.get("/checking", (req, res) => {
  console.log(res.headersSent);
  res.send("Halo");
  console.log(res.headersSent);
});

app.get("/check", (req, res) => {
  res.set("customer", "halo123");
  console.log(res.get("customer"));
  res.send("Header Set");
});
