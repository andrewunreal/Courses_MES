async function fetchMultipleServers(urls) {
  try {
    const fetchPromises = urls.map(url => 
      fetch(url).then(response => {
        if (!response.ok) {
          throw new Error(`Request failed: ${url} (status ${response.status})`);
        }
        return response.json();
      })
    );

    const results = await Promise.all(fetchPromises);
    return results;
    
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data from one or more servers');
  }
}

const servers = [
  'https://jsonplaceholder.typicode.com/users/1',
  'https://api.github.com/users/octocat',
  'https://reqres.in/api/users/2'
];

(async () => {
  try {
    const data = await fetchMultipleServers(servers);
    console.log('Combined data:', data);
  } catch (error) {
    console.error('Operation failed:', error);
  }
})();