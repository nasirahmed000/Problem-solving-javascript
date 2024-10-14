async function fetchAndProcessData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('HTTP error ' + response.status);
        const data = await response.json();
        return processData(data);
    } catch (error) {
        console.error('Error:', error);
        throw error; // Re-throw to allow calling code to handle it
    } finally {
        console.log('Fetch attempt completed');
    }
}

function processData(data) {
    // Process the data...
}

fetchAndProcessData('https://api.example.com/data')
    .then(result => console.log(result))
    .catch(error => console.error('Caught in caller:', error));
