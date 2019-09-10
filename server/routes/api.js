/*
  Route handler for API
*/

import express from "express";

import { Field } from "../models";

const router = express.Router();

// Form sent to client
router.get("/form", async (req, res) => {
  // Return JSON array of active field objects, sorted by order
  const fields = await Field.findAll({
    order: [["order", "DESC"]],
    where: {
      active: true
    }
  });

  return res.json(fields);
});

router.post("/form", (req, res) => {
  // POST response
  // Send responses based off fields, validate fields, then create corresponding response objects as need be
  return res.json({
    message: "POST form"
  });
});

// Allow for the modification of form fields
router.get("/form/field", async (req, res) => {
  // Return JSON array of all field objects, sorted by order
  const fields = await Field.findAll({
    order: [["order", "DESC"]]
  });

  return res.json(fields);
});

router.post("/form/field", async (req, res) => {
  const newField = await Field.create(req.body);
  return res.json(newField);
});

router.put("/form/field/:id", (req, res) => {
  return res.json({
    message: "PUT field"
  });
});

router.delete("/form/field/:id", (req, res) => {
  return res.json({
    message: "DELETE field"
  });
});

export default router;
