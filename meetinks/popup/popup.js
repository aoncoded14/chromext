import { GoogleGenerativeAI } from "@google/generative-ai";
import { loadEnv } from './dotenv.js';

document.getElementById('startSummary').addEventListener('click', generateSummary);
document.getElementById('stopSummary').addEventListener('click', stopMeeting);
document.getElementById("responseContainer").addEventListener('click', stopMeeting);;

const apiKey = loadEnv('API_KEY');
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Function to start the meeting recording
function startMeeting() {
    console.log("Meeting started!");
    // Implement meeting recording logic here
}

// Function to generate text based on a prompt using Google Generative AI
async function generateSummary(prompt) {
    try {
        const prompt = "Summarize the meeting notes.";
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Error generating content:", error);
        return "There was an error generating the content.";
    }
}

// Function to stop the meeting recording and generate summary
async function stopMeeting() {
    console.log("Meeting stopped!");
    const prompt = "Summarize the meeting notes.";
    const summary = await generateText(prompt);
    document.getElementById('meetingSummary').value = summary;
}


document.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.getElementById("fetchButton");
    const responseContainer = document.getElementById("responseContainer");
  
    fetchButton.addEventListener("click", async () => {
      // Clear the response container before each request
      responseContainer.innerHTML = "Loading...";
  
      try {
        // Make an API call (replace the URL with your actual API endpoint)
        const response = await fetch("https://api.example.com/data");  // Replace with a valid API URL
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        
        // Parse the response as JSON
        const data = await response.json();
        
        // Render the response in the UI with multiline support
        responseContainer.innerHTML = `
          <div style="white-space: pre-wrap; word-break: break-word;">
            <p>Data:</p>
            <p>${data.info}</p>
          </div>
        `;
      } catch (error) {
        // Handle errors
        responseContainer.innerHTML = `<p style="color:red;">${error.message}</p>`;
      }
    });
  });
  