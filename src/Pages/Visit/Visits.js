import React from 'react';
import { useParams } from 'react-router';

const Visits = (props) => {
    const { serviceId } = useParams();



    return (
        <div className="text-center ">
            <h2>This is visiting section {serviceId}</h2>
            <h2>Devolopper is ill</h2>
        </div>
    );
};

export default Visits;