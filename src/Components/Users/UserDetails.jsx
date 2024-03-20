import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const userDetails = useLoaderData();
    return (
        <div>
            <h1>User Details</h1>
            <h2>{userDetails.name}</h2>
            <h2>{userDetails.email}</h2>
            <h2>{userDetails.website}</h2>
        </div>
    );
};

export default UserDetails;