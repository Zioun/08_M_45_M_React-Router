import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const style = {
        border: "1px solid black",
        padding: "5px",
        background: "gray",
        color: "white"
    }
    return (
        <div style={style}>
            <h2>{user.name}</h2>
            <h3>{user.username}</h3>
            <h4>{user.email}</h4>
            <Link to={`/user/${user.id}`}><button>Details</button></Link>
        </div>
    );
};

export default User;