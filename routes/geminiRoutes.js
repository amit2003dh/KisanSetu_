const router = require("express").Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/voice-intent", async (req,res) => {
  const { text } = req.body;

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(
    `Farmer query: ${text}. Identify intent.`
  );

  res.send({
    intent: result.response.text()
  });
});

module.exports = router;
