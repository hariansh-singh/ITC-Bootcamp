function fetchData() {
    console.log("Fetching data...");

    setTimeout(() => {
        console.log("Data fetched!");

        processData()
    }, 2000); 
}

function processData() {
    console.log("Processing data...");
}

// fetchData(processData);
fetchData()
