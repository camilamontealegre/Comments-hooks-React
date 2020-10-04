import React from 'react';
import { useState } from 'react';

const AddComment = ({addBody}) =>{
    const [valueBody, setValueBody] = useState({ 
        body:'',
        id:''
    });
    
    const handleSubmit = (e) =>{
     e.preventDefault();
     if (!valueBody) return;
     addBody(valueBody);
     setValueBody({body:''});

    }
    return(
    <form onSubmit = {handleSubmit}>
    <input
    type ="text"
    name ="body"
    placeholder="Add Comment"
    onChange={e => setValueBody({
        body:e.target.value
    })}
    value ={valueBody.body}
    />
    </form>
    )
}
export default AddComment;