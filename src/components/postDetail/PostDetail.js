import React from 'react';
import { useParams } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import './PostDetail.css';
import Comment from '../../components/Comment/Comment'


const PostDetail = () => {
    const {id} = useParams();
    const [userPost,setUserPost] = useState([]);
    const [comment,setComment] = useState([]);

    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUserPost(data))
    },[])

    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data=>setComment(data))
    },[])
   const post = userPost.find( post=> post.id === parseInt(id));
   const {body,title} = {...post};
   //console.log(body);
    return (
        <div className="headerInfo">
            <h1 style={{fontFamily: 'cursive',}}>Title:{title}</h1>
            <p style={{fontFamily: 'cursive',}}>{body}</p>
            {
                comment.map(com=><Comment comment={com}></Comment>)
            }
        </div>
    );
};

export default PostDetail;