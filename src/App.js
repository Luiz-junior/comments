import React, { useState } from 'react';

import Comments from './Comments';
import NewComment from './NewComment';

function App() {
  const [comments, setComments] = useState(['Comment 1', 'Comment 2']);

  const sendComment = newComment => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <NewComment sendComment={sendComment} />
      <Comments comments={comments} />
    </div>

  );
}

export default App;
