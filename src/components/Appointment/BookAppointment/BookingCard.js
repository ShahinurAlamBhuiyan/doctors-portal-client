import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';

const BookingCard = ({book, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='col-md-4 mb-5'>
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{book.subject}</h5>
                    <h6>{book.visingHour}</h6>
                    <p>{book.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} className='btn btn-brand text-uppercase'>Book Appointment</button>
                    
                    <AppointmentForm date={date} modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={book.subject}/>
                </div>
            </div>
            
        </div>
    );
};

export default BookingCard;