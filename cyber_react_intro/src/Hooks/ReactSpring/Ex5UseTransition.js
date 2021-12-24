import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

export default function Ex5UseTransition() {
  let [arrItem, setArrayItem] = useState([
    { id: 1, title: 'FrontEndOnline', content: 'cyberlearn' },
    { id: 2, title: 'FrontEndOffline', content: 'cybersoft' },
    { id: 3, title: 'FrontEndTuXa', content: 'cybersoft' },
  ]);

  const [article, setArticle] = useState({
    id: '',
    title: '',
    content: '',
  });

  let renderItem = () => {
    return arrItem.map((item, index) => {
      return (
        <div key={index} className="bg-dark text-white p-3 mt-2">
          <div className="text-right">
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteItem(item.id);
              }}
            >
              X
            </button>
          </div>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </div>
      );
    });
  };

  const deleteItem = () => {
    console.log('delete item');
  };

  const handleChange = () => {
    console.log('handle change');
  };

  const handleSubmit = () => {
    console.log('handle submit');
  };

  return (
    <div className="container">
     { renderItem()}
      <div className="form-group">
        <h3>Title</h3>
        <input className="form-control" name="title" onChange={handleChange} />
      </div>
      <div className="form-group">
        <h3>Content</h3>
        <input
          className="form-control"
          name="content"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button onClick={handleSubmit}>Add article</button>
      </div>
    </div>
  );
}
