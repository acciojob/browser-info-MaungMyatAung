//your JS code here. If required.
// Get references to browser details
    const browserName = navigator.appName;
    const browserVersion = navigator.appVersion;

    // Construct message
    const message = "You are using " + browserName + " version " + browserVersion;

    // Display message in the div
    document.getElementById("browser-info").textContent = message;
