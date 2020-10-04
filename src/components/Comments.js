import React from 'react';
import CommentItem from './CommentItem';


const Comments = ({comments, deleteComment}) => {

return (
comments.map((item) => (<CommentItem key ={item.id} comment={item} deleteComment={deleteComment}/>))
)

}

export default Comments;

