/*
  Express app setup and configuration
*/

import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "Hello world"
  });
});

export default app;
