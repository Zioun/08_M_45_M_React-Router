import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import '../CSS/Style.css'

const Header = () => {
    const style = {
        margin: "5px"
    }
    return (
        <div>
            <nav  style={style}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </nav>
        </div>
    );
};


export default Header;