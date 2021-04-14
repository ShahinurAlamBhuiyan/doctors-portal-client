import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://gentle-caverns-92118.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <section className="doctors">
                <h4 className="text-center text-brand mb-3">Our Doctors</h4>
                <div className="d-flex justify-content-center flex-wrap">
                    {
                        doctors.map(doctor => <Doctor doctor={doctor} key={doctor._id} />)
                    }
                </div>
        </section>
    );
};

export default Doctors;