import React from 'react';

const ComicPanel = ({ image }) => {
  return (
    <div className="comic-panel">
      <img src={image} alt="Comic Panel" />
    </div>
  );
};

export default ComicPanel;
