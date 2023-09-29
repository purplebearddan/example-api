const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/json", (req, res) => {
  console.log("GET Request");
  console.log(req.headers);
  console.log(req.body);
  res.json({ msg: "hello" });
});
app.post("/json", (req, res) => {
  console.log("POST Request");
  console.log(req.headers);
  console.log(req.body);
  res.json({ msg: `Hello ${req.body.name}` });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
