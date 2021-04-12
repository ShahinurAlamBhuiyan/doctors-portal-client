import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link mr-5"  to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mr-5" to="/">Patient</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mr-5" to="/dashboard/appointment">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mr-5 text-brand" to="/">
              {
                loggedInUser.email ? `${loggedInUser.name}` : 'Admin'
              }

                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mr-5 text-white" to="/">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mr-5 text-white" to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;