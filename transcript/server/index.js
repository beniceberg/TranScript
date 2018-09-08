const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("node-fetch");

app.use(cors());

app.get("/transcript", async (req, res) => {
  const url =
    "https://s3-eu-west-1.amazonaws.com/public-amb/demo_english_final.json";
  fetch(url)
    .then(response => response.json())
    .then(json => res.status(200).send(json))
    .catch(err => res.status(500).send(err));
});

const port = 3008;

app.listen(port, () =>
  console.log("TranScript server listening at http://localhost:%s/", port)
);
