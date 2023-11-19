import React from 'react';
import ComicPanel from './ComicPanel';

const ComicStrip = ({ images }) => {
  return (
    <div id="comic-strip">
      {images.map((image, index) => (
        <ComicPanel key={index} image={image} />
      ))}
    </div>
  );
};

export default ComicStrip;
