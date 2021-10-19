import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound.jpg'

const NotFound = () => {
    return (
        <div className="text-center">
            <img style={{
                width: '100%',

            }} src={notfound} alt="" />
            <Link to="/"> <button className="btn btn-secondary mt-3">Go To Home</button> </Link>

        </div>
    );
};

export default NotFound;