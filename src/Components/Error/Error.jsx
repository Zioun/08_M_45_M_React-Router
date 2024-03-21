import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops!</h1>
            <p><i>{error.statusText || error.message}</i></p>
            <p>
                {
                    error.status === 404 && <div>
                        <h1>404</h1>
                    </div>
                }
            </p>
        </div>
    );
};

export default Error;