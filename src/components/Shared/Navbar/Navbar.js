import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import doctorLogo from '../../../images/doctorsLogo.png'

const Navbar = () => {
  const [loggedInUser, setLoggedInUser,token,  setToken] = useContext(UserContext)
  const history = useHistory()
  const handleLogOut = () => {
    setLoggedInUser('')
    setToken(null)
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        
        <img src={doctorLogo} width='60' alt=""/>
        <span style={{color:'#1CC7C1', fontWeight:'700'}}>Doctors Portal</span> </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item  text-center">
              <Link className="nav-link mr-5" to="/">Home</Link>
            </li>
            <li className="nav-item  text-center">
              <Link className="nav-link mr-5" to="/">Patient</Link>
            </li>
            <li className="nav-item  text-center">
              <Link className="nav-link mr-5" to="/dashboard/appointment">Dashboard</Link>
            </li>
            <li className="nav-item  text-center">
              <Link className="nav-link mr-5 text-white" to="/">Blogs</Link>
            </li>
            <li className="nav-item  text-center">
              <Link className="nav-link mr-5 text-white" to="/">Contact Us</Link>
            </li>
            <li className="nav-item  text-center">
              <span className="nav-link mr-5 text-brand" >
                {
                  loggedInUser.email ? 
                    <button onClick={handleLogOut} className="btn btn-brand">Log out</button>
                  : <button className='btn btn-brand' onClick={()=> history.push('/login')} >Login</button>
                }
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;