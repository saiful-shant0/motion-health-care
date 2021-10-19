import React from 'react';

const Doctor = (props) => {
    const { name, specialty, degree, img } = props.doctor;
    return (
        <div className="service pb-3">
            <img className="img-fluid" src={img} alt="" />
            <h2>{name}</h2>

            <p className="px-3">{specialty}</p>

            <p className="px-3">{degree}</p>
            <button className="btn btn-success">Get Appointment</button>
        </div>
    );
};

export default Doctor;