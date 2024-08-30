import fetch from "node-fetch";

import express from "express";
const app = express();

const api_key = "f9f08ab5504b5ecee8199edd9e0401de";

const initializeServer = () => {
  app.listen(3000, () => {
    console.log("Server Is Running on Port No 3000");
  });
};

app.get("/:location/", async (req, res) => {
  const { location } = req.params;

  const link = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

  const fetchResponse = await fetch(link);

  if (fetchResponse.ok) {
    const data = await fetchResponse.json();
    res.send(data);
  } else {
    res.sendStatus(404);
  }
});

initializeServer();
