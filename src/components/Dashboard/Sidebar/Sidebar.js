import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser,token, setToken] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

  const handleLogOut = () => {
    setLoggedInUser('')
    setToken(null)
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
  }

    useEffect(() => {
        fetch('https://gentle-caverns-92118.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data))
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard/appointment" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/appointment" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                    </Link>
                </li>
                {isDoctor && <div>
                    <li>
                        <Link to="/dashboard/addDoctor" className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add doctor</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/dashboard/allPatients" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>All Patients</span>
                        </Link>
                    </li>
                </div>}
                <li>
                    <Link to="/doctor/prescriptions" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/home" className="text-white" >
                        <FontAwesomeIcon icon={faCog} /> <span>Home</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link onClick={handleLogOut}  to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;