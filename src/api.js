import express from "express";
import { greetUser, classifyScore } from "./utils.js";

const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/greet", (req, res) => {
  const name = req.query.name || "world";
  res.json({ message: greetUser(name) });
});

app.get("/grade", (req, res) => {
  const score = Number(req.query.score);
  try {
    const grade = classifyScore(score);
    res.json({ grade });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default app;
