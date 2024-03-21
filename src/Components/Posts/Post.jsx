import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const style = {
        border: "1px solid black",
        padding: "5px",
        background: "gray",
        color: "white",
        "padding-left": "150px",
        "padding-right": "150px"
    }
    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`/post/${post.id}`);
    }
    return (
        <div style={style}>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
            <button onClick={handleDetails}>Details</button>
        </div>
    );
};

export default Post;