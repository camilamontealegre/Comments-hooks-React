import React from 'react';
import CommentItem from './CommentItem';


const Comments = ({comments}) => {

return (
comments.map((item) => (<CommentItem key ={item.id} comment={item}/>))
)

}

export default Comments;

