import React from 'react';

const addArticleForm = ({ onSubmit }) => {
  let input;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        onSubmit(input.value);
        input.value = '';
      }}
    >
      <div Style="display:inline-block;">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          ref={(node) => {
            input = node;
          }}
        />
      </div>
      <button type="submit">SAVE</button>
    </form>
  );
};
export default addArticleForm;
