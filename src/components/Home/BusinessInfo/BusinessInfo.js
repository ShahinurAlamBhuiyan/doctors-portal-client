import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InfoCard from './InfoCard/InfoCard';

const infosData = [
    {
        title:'Opening Hours',
        description:'we are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title:'Visit Our Location',
        description:'Brooklyn, NY 10003 USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title:'Call Us Now',
        description:'+156789056789',
        icon: faPhone,
        background: 'primary'
    }
]


const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center'>
            <div className='w-75 row'>
            {
                infosData.map( info => <InfoCard info={info} /> )
            }
            </div>
        </section>
    );
};

export default BusinessInfo;