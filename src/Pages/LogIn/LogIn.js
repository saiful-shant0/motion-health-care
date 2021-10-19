import React from 'react';
import useAuth from '../../Hooks/useAuth';


const LogIn = () => {
    const { signInUsingGoogle } = useAuth()

    return (
        <div>
            <h2>Plaese Log In</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Please Sin In</button>
        </div>
    );
};

export default LogIn;