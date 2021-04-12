import React from 'react';
import BookingCard from './BookingCard';

const bookingData = [
    {
        _id: 'doihfaohfoerh',
        id: 1,
        subject: 'Teeth Orthodontics',
        visingHour: '8.00 AM - 9.00 AM',
        totalSpace: 10
    },
    {
        _id: 'doihfaohflerjfgoiseoerh',
        id: 2,
        subject: 'Cosmetic Dentistry',
        visingHour: '10.40 AM - 11.40 AM',
        totalSpace: 12
    },
    {
        _id: 'doihfaohflerjfgoiseoerh',
        id: 3,
        subject: 'Teeth Cleaning',
        visingHour: '5.00 PM - 6.40 PM',
        totalSpace: 14
    },
    {
        _id: 'doihfaoh545flerjfgoiseoerh',
        id: 4,
        subject: 'Cosmetic Dentistry',
        visingHour: '5.00 PM - 6.40 PM',
        totalSpace: 13
    },
    {
        _id: 'doihfaohflerjfgoiseoerh',
        id: 5,
        subject: 'Medicine Specialist',
        visingHour: '5.00 PM - 6.40 PM',
        totalSpace: 14
    },
    {
        _id: 'doihfdffafdaohflerjfgoiseoerh',
        id: 6,
        subject: 'Medicine Specialist',
        visingHour: '6.00 PM - 10.40 PM',
        totalSpace: 9
    }
]

const BookAppointment = ({date}) => {
    return (
        <section className='pt-5'>
            <h2 className='text-center text-brand pb-5'>Available Appointments on {date.toDateString()} </h2>
            <div className="row">
                {
                    bookingData.map( book => <BookingCard book={book} key={book.id} date={date} /> )
                }
            </div>
        </section>
    );
};

export default BookAppointment;