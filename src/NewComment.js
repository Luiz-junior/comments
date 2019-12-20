import React, { useState } from 'react';

const NewComment = props => {
  const [newComment, setNewComment] = useState(['']);

  const handleChange = e => {
    setNewComment(e.target.value);
  };

  const sendComment = () => {
    props.sendComment(newComment);
    setNewComment('');
  };

  return (
    <div>
      <div>
        <textarea value={newComment} onChange={(e) => handleChange(e)}></textarea>
        <button onClick={sendComment} >Enviar</button>
      </div>
    </div>
  )
};

export default NewComment;