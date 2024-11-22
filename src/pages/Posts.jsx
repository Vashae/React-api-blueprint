import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const Posts =  () => {
    const { id } = useParams();
    const [posts, setPosts] = useState([]);
   
   
    useEffect (() => {
        async function fetchPosts() {
            const { data } = axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            setPosts(data);    
        }
        fetchPosts();
     },[]);
    return (
    <>
    {posts.map(post => <>{post.id}</>)}
     </>
    );
}
export  default Posts