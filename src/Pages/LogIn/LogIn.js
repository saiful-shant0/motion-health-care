import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Email from './EmailLogIn/Email'


const LogIn = () => {
    const { signInUsingGoogle } = useAuth()

    return (
        <div className="container my-4 p-5 ">

            <Email></Email>
            <button onClick={signInUsingGoogle} className="btn btn-warning w-100 mb-5">Sign In Using Google</button>
        </div>
    );
};

export default LogIn;