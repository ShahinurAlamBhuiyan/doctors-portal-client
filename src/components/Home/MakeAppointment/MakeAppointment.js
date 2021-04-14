import React from 'react';
import './MakeAppointment.css'
import doctor from '../../../images/doctors.png'

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="row">
                <div className=" col-lg-5 col-md-6 d-none d-md-block d-lg-block">
                    <img src={doctor} alt=""/>
                </div>
                <div className="col-lg-7 col-md-6 text-white py-5 appointment-text text-center">
                    <h5 className="text-brand text-uppercase ">Appointment</h5>
                    <h1 className="my-4">Make an Appointment <br/> Today</h1>
                    <p>Lorem ipsum dolor, sit olor sit amet, consectetur adipisicing elit. Et, quisquam. assumenda saepe hic amet nemo ea facere a!</p>
                    <button className="btn btn-brand">Learn More</button>
                </div>
            </div>
    </section>
    );
};

export default MakeAppointment;