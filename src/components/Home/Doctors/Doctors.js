import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://gentle-caverns-92118.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    console.log(doctors);

    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-brand mb-5">Our Doctors</h5>
                <div className="row">
                    {
                        doctors.map(doctor => <Doctor doctor={doctor} key={doctor._id} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;