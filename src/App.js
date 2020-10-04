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
fetch('https://jsonplaceholder.typicode.com/comments?_limit=3') //cuando se ejecute
.then (response => response.json() ) //Entonces haga lo que está en esta línea, response es la respuesta del servidor
.then (result => setCommments(result))
.then (json => console.log('componentDidMount', json))
}, [])

  const addBody = (comment) => {
  comment.id = comments.length +1
  const newComment = [...comments, comment];
  //setCommments(newComments); esta linea  es para no tener que usar la API

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
const deleteComment = (id) => {
    fetch ('https://jsonplaceholder.typicode.com/comments' + id, {
      method: 'DELETE'
    })  
    .then((response) => response.json())
    .then(() =>{
      const updatedComment = comments.filter((comment)=> comment.id !== id)//esto simula un ciclo for 
      setCommments(updatedComment)
    })
  }

  return (
    <div className="App">
      <Title/>
      <About/>
          <AddComment addBody={addBody}/> <br/>
          <Comments deleteComment={deleteComment}  comments={comments}/>

    </div>
  );
}

export default App;
