import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1>Home Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellendus ducimus quam soluta harum laborum quo maxime praesentium quaerat aut?</p>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;