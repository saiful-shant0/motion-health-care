import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const [doctors, setdoctors] = useState([]);
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setdoctors(data))
    })
    return (
        <div className="container text-center">
            <h2 className="text-primary mt-5">Our Doctors</h2>
            <div className="service-continer">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;