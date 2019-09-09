/*
  Express app setup and configuration
*/

import express from "express";

import api from "./routes/api";

const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "Hello world"
  });
});

app.use("/api/v1", api);

export default app;
