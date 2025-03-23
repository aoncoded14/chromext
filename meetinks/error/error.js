function retry() {
    // Logic for retrying the previous action, e.g., restarting a recording
    window.history.back(); // Go back to the previous page if possible
}

function goHome() {
    // Redirect to the popup or the main page of the extension
    chrome.runtime.openOptionsPage();
}
