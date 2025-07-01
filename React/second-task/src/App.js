import React, { useEffect, useState } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => setImageUrl(data.message))
      .catch((error) => console.error('Ошибка загрузки:', error));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Random dog</h2>
      {imageUrl ? (
        <img src={imageUrl} alt="Dog" width="300" />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
}

export default App;
