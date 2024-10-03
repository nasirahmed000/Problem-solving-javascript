// Problem: Parallel API Requests with Rate Limiting
// Let's create a function that fetches data from multiple API endpoints in parallel, but with a rate limit to avoid overwhelming the server. The function should also process the results and return them in a specific format.
// Here's the problem statement:
// Create a function fetchDataWithRateLimit that takes the following parameters:

// urls: An array of API endpoints to fetch data from
// maxConcurrent: The maximum number of concurrent requests allowed
// requestDelay: The delay (in milliseconds) between each batch of requests

// The function should:

// Fetch data from all URLs, respecting the maxConcurrent and requestDelay limits
// Process each response: extract a title and count field
// Return an object with two properties:

// titles: An array of all titles, sorted alphabetically
// totalCount: The sum of all count values


Code implementation :

async function fetchDataWithRateLimit(urls, maxConcurrent, requestDelay) {
  const fetchWithDelay = async (url, delay) => {
    await new Promise(resolve => setTimeout(resolve, delay));
    const response = await fetch(url);
    return response.json();
  };

  const processInBatches = async (items, batchSize, processor) => {
    const results = [];
    for (let i = 0; i < items.length; i += batchSize) {
      const batch = items.slice(i, i + batchSize);
      const batchResults = await Promise.all(batch.map(processor));
      results.push(...batchResults);
      if (i + batchSize < items.length) {
        await new Promise(resolve => setTimeout(resolve, requestDelay));
      }
    }
    return results;
  };

  const processedData = await processInBatches(
    urls,
    maxConcurrent,
    url => fetchWithDelay(url, 0)
  );

  const titles = processedData.map(data => data.title).sort();
  const totalCount = processedData.reduce((sum, data) => sum + data.count, 0);

  return { titles, totalCount };
}

// Example usage:
const urls = [
  'https://api.example.com/data1',
  'https://api.example.com/data2',
  'https://api.example.com/data3',
  'https://api.example.com/data4',
  'https://api.example.com/data5',
];

fetchDataWithRateLimit(urls, 2, 1000)
  .then(result => console.log(result))
  .catch(error => console.error('Error:', error));







