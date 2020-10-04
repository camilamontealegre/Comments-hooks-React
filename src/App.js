import React, { useState, useEffect } from 'react';
import './App.css';
import AddComment from './components/AddComment';
import Comments from './components/Comments';
import Title from './components/Title';
import About from './components/pages/About';



function App() {
  const [comments, setCommments] = useState([ 
    {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibu"
  }
])

useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
.then (response => response.json() )
.then (result => setCommments(result))
.then (json => console.log('componentDidMount', json))
}, [])

  const addBody = (comment) => {
  comment.id = comments.length +1
  const newComment = [...comments, comment];
  //setCommments(newComments); esto es para no tener que usar la API

//usando la API para agregar comentario:
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    body: comment.body,
    userId: comment.id
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then(setCommments(newComment));

  }

  return (
    <div className="App">
      <Title/>
      <About/>
          <AddComment addBody={addBody}/>
          <Comments comments={comments}/>

    </div>
  );
}

export default App;
