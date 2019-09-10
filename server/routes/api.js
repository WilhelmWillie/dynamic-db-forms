/*
  Route handler for API
*/

import express from "express";

const router = express.Router();

// Form sent to client
router.get("/form", (req, res) => {
  // GET active fields
  // Return JSON array of field objects
  return res.json({
    message: "GET form"
  });
});

router.post("/form", (req, res) => {
  // POST response
  // Send responses based off fields, validate fields, then create corresponding response objects as need be
  return res.json({
    message: "POST form"
  });
});

// Allow for the modification of form fields
router.get("/form/field", (req, res) => {
  return res.json({
    message: "GET field"
  });
});

router.post("/form/field", (req, res) => {
  return res.json({
    message: "POST field"
  });
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
