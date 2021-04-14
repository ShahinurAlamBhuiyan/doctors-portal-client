import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './infoCard.css'

const InfoCard = ({ info }) => {
    return (
        <div className='text-white info-card mb-3'>
            <div className={`d-flex justify-content-center info-container info-${info.background}`}>
                <div className='mr-3'>
                    <FontAwesomeIcon style={{width:'40px'}} className='info-icon' icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <strong>{info.title}</strong> <br/>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;