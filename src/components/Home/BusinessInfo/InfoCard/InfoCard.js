import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './infoCard.css'

const InfoCard = ({ info }) => {
    return (
        <div className='col-md-4 text-white  info-card'>
            <div className={`d-flex justify-content-center info-container  info-${info.background}`}>
                <div className='mr-3'> 
                    <FontAwesomeIcon className='info-icon' icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;