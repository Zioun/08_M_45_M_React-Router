import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header></Header>
            <h1>My Website</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellendus ducimus quam soluta harum laborum quo maxime praesentium quaerat aut?</p>
            {
                navigation.state === "loading" ? "loading...." : <Outlet></Outlet>
            }
            
        </div>
    );
};

export default Home;