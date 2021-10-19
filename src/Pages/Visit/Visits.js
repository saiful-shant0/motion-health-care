import React from 'react';
import { useParams } from 'react-router';

const Visits = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>This is Booking {serviceId}</h2>
        </div>
    );
};

export default Visits;