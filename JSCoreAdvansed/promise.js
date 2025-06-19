function fetchMultipleAPIs(apiUrls) {
  const promises = apiUrls.map(url => 
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
  );

  return Promise.all(promises);
}

const apiUrls = [
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/comments/1'
];

fetchMultipleAPIs(apiUrls)
  .then(results => {
    console.log("Combined results:", results);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });