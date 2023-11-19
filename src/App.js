import React, { useState } from 'react';
import axios from 'axios';
import ComicForm from './components/ComicForm';
import ComicStrip from './components/ComicStrip';
import './App.css';

const App = () => {
  const [textInputs, setTextInputs] = useState(Array(10).fill(''));
  const [comicImages, setComicImages] = useState([]);

  const queryAPI = async (data) => {
    try {
      const response = await axios.post(
        'https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud',
        {
          inputs: Object.values(data),
        },
        {
          headers: {
            Accept: 'image/png',
            Authorization: 'Bearer Your_API_Key_Here',
            'Content-Type': 'application/json',
          },
          responseType: 'blob',
        }
      );

      const imageUrl = URL.createObjectURL(new Blob([response.data]));
      return imageUrl;
    } catch (error) {
      console.error('API Error:', error);
      throw new Error('API Error');
    }
  };

  const generateComic = async () => {
    try {
      const imageUrls = await Promise.all(textInputs.map(queryAPI));
      setComicImages(imageUrls);
    } catch (error) {
      console.error('Comic Generation Error:', error);
    }
  };

  return (
    <div className="container">
      <h1>Comic Creator</h1>
      <ComicForm textInputs={textInputs} onFormSubmit={generateComic} />
      <ComicStrip images={comicImages} />
    </div>
  );
};

export default App;
