import React  from 'react';
import './CommentItem.css'

const CommentItem = ({comment, deleteComment}) =>{ //comment y deleteComment son props escritas con destructuring

return <div className="item">
<div>{comment.body}</div>
<button onClick= {()=>deleteComment(comment.id)}>X</button>
</div>
};


export default CommentItem