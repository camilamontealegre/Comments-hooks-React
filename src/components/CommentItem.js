import React  from 'react';
import './CommentItem.css'

const CommentItem = ({comment}) =>{

return <div>
<div className="item">{comment.body}</div>
<button>X</button>
</div>
};


export default CommentItem