import React, { useEffect, useState } from 'react';

const HelloWorld = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://cs396-website.df.r.appspot.com') // Use your Node.js server URL
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching message:', error));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default HelloWorld;
