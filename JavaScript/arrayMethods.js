// Function to fetch data from a server
function fetchData(callback) {
    console.log("Fetching data...");

    // Simulate a delay for fetching data
    setTimeout(() => {
        console.log("Data fetched!");

        // After fetching, we call the callback function
        callback();
    }, 2000); // 2 seconds delay
}

// Function to process the fetched data
function processData() {
    console.log("Processing data...");
}

// Call fetchData and pass processData as the callback
fetchData(processData);
