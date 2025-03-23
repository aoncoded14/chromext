require('dotenv').config();
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";


// Load environment variables from .env file
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Function to generate text based on a prompt
async function generateText(prompt) {
    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Error generating content:", error);
        return "There was an error generating the content.";
    }
}
