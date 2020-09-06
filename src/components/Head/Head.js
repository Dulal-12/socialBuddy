import React, { useState, useEffect } from 'react';
import PostDetail from '../postDetail/PostDetail';
import HeaderInfo from '../HeaderInfo/HeaderInfo';


const Head = () => {
    const [posts,setPosts] = useState([]);//setPosts from jsonPlacholder using fetch

    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    //Pass data  HeaderInfo
    return (
        <>
            {
                posts.map(post => <HeaderInfo post={post}></HeaderInfo>)
            }
        </>
    );
};

export default Head;