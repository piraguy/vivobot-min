// server.cjs
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (_req, res) => {
  return res.send("VivoBot backend OK - hello");
});

app.post("/api/chat", (req, res) => {
  return res.json({
    ok: true,
    response: {
      display_text: "Lets practice. What food do you like?",
      tts_text: "Lets practice. What food do you like?",
      keywords: ["food","like","pizza","juice"],
      feedback_short: "Great! Use short sentences.",
      state: { stage: "conversation", askedNameOnce: true, studentName: "Student", turns: 1 },
      state_capsule: "stage=conversation; askedNameOnce=true; studentName=Student; turns=1"
    },
    state: { stage: "conversation", askedNameOnce: true, studentName: "Student", turns: 1 }
  });
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
