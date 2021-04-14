import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InfoCard from './InfoCard/InfoCard';

const infosData = [
    {
        id: 1,
        title:'Opening Hours',
        description:'we are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        id: 2,
        title:'Visit Our Location',
        description:'Brooklyn, NY 10003 USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        id: 3,
        title:'Call Us Now',
        description:'+156789056789',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
            <div className='d-flex justify-content-center flex-wrap mt-4'>
            {
                infosData.map( info => <InfoCard info={info}  key={info.id} /> )
            }
            </div>
    );
};

export default BusinessInfo;