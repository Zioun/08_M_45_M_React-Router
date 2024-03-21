import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const style = {
        margin: "5px"
    }
    return (
        <div>
            <nav style={style}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
            </nav>
        </div>
    );
};


export default Header;