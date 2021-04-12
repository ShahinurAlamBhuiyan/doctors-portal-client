
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({ doctor: { name, email, img, image, mobile } }) => {
    return (
        <div className="col-md-4 text-center">
            {
                image ? <img style={{ height: '200px', width: '200px', borderRadius: '50%' }} src={`data:image/png;base64,${image.img}`} />
                    :
                    <img style={{ height: '150px', borderRadius: '50%' }} className="img-fluid mb-3" src={`https://gentle-caverns-92118.herokuapp.com/${img}`} alt="" />
            }
            <h4>{name}</h4>
            <p>{email}</p>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> +880-{mobile}</p>
        </div>
    );
};

export default Doctor;