import generateStory from "./text_generation.js";

(async () => {
    const prompt = "Write a story about a magic backpack.";
    const story = await generateStory(prompt);
    console.log("Generated Story:");
    console.log(story);
})();
