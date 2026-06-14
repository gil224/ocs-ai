import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  const { title, options } = req.body || {};

  const response = await client.responses.create({
    model: "gpt-5.3-mini",
    input: `
题目：${title}
选项：${options || "无"}

请给出详细讲解 + 最终答案
    `
  });

  res.json({
    question: title,
    answer: response.output_text
  });
}
