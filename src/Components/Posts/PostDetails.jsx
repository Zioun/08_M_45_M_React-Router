import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const style = {
        border: "1px solid black",
        padding: "5px",
        background: "gray",
        color: "white",
        "padding-left": "150px",
        "padding-right": "150px"
    }
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate(-1);
    }
    return (
        <div style={style}>
            <h2>{postDetails.title}</h2>
            <h3>{postDetails.body}</h3>
            <button onClick={handleBack}>Back</button>
        </div>
    );
};

export default PostDetails;