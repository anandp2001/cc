import React, { useState } from 'react';

const ComicForm = ({ textInputs, onFormSubmit }) => {
  const [localTextInputs, setLocalTextInputs] = useState(textInputs);

  const handleInputChange = (index, value) => {
    const newInputs = [...localTextInputs];
    newInputs[index] = value;
    setLocalTextInputs(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(localTextInputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      {localTextInputs.map((input, index) => (
        <textarea
          key={index}
          value={input}
          onChange={(e) => handleInputChange(index, e.target.value)}
          placeholder={`Panel ${index + 1}`}
        />
      ))}
      <button type="submit">Generate Comic</button>
    </form>
  );
};

export default ComicForm;
