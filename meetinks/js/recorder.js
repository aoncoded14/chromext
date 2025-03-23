let mediaRecorder;
let recordedChunks = [];

// Function to start recording
async function startRecording() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
            recordedChunks.push(event.data);
        }
    };

    mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);

        // Save or display the recording link
        chrome.storage.local.set({ [new Date().toISOString()]: url });

        // Reset chunks for next recording
        recordedChunks = [];
    };

    mediaRecorder.start();
}

// Function to stop recording
function stopRecording() {
    mediaRecorder.stop();
}

// Export these functions
export { startRecording, stopRecording };


// Function to redirect to the error page
function showErrorPage() {
    chrome.tabs.create({ url: "error/error.html" });
}