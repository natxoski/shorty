const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.port || 8080;

let fileContent = "";

let fileDescriptor = fs.openSync(__dirname + "/redirects.txt", "r");
fileContent = fs.readFileSync(fileDescriptor, "utf-8");
fs.closeSync(fileDescriptor);

let obj = {};

fileContent.split(`\n`).forEach(entry => {
  const item = entry.split(" ");
  obj[item[0]] = item[1];
});

app.use(bodyParser());

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/new", (req, res) => {
  res.sendFile(__dirname + "/new.html");
});

app.post("/new", (req, res) => {
  obj["/" + req.body.id] = req.body.url;
  let fileDescriptor = fs.openSync(__dirname + "/redirects.txt", "a");
  fs.appendFileSync(
    fileDescriptor,
    `/${req.body.id} ${obj["/" + req.body.id]}\n`,
    "utf8"
  );
  fs.closeSync(fileDescriptor);
  console.log("Appended to the file");
  console.log("new received params", req.body.id, req.body.url);
  res.send(`new ${req.body.url}`);
});

app.get("/:id", (req, res) => {
  console.log("received params", req.params.id);

  if (obj.hasOwnProperty("/" + req.params.id)) {
    console.log("Opened file", obj["/" + req.params.id]);
  }

  if (obj.hasOwnProperty("/" + req.params.id)) {
    res.status(301).redirect(obj["/" + req.params.id]);
  } else {
    res.redirect("/");
  }
});

app.listen(PORT, () => {
  console.log(`server running at https://localhost:${PORT}`);
});
