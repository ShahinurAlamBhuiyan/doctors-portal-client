
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({ doctor: { name, img, image, mobile } }) => {
    return (
        <div className="card d-flex justify-content-center flex-wrap ml-4 mt-4" style={{width:'17rem'}}>
            <div className='d-flex justify-content-center mt-2'>
            {
                image ? <img style={{ height: '200px', width: '200px', borderRadius: '50%' }} src={`data:image/png;base64,${image.img}`} />
                    :
                    <img style={{ height: '200px', width: '200px', borderRadius: '50%' }} src={`https://gentle-caverns-92118.herokuapp.com/${img}`} alt="" />
            }
            </div>
            <div className="card-body text-center">
                <strong className="text-center">{name}</strong>
                <p> <FontAwesomeIcon className="text-dark" icon={faPhoneAlt} /> +880-{mobile}</p>
            </div>
        </div>
    );
};

export default Doctor;