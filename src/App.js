import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login'
import { createContext, useEffect, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [token, setToken] = useState(null);
  useEffect(() => {
    const store = sessionStorage.getItem('token');
    if (store) {
      setToken(store)
    }
    const USER = JSON.parse(sessionStorage.getItem('user'));
    if (USER) {
      setLoggedInUser(USER)
    }
  }, [])
  return (
    <div className="container">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser, token, setToken]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path='/appointment'>
              <Appointment />
            </Route>
            <PrivateRoute path='/dashboard/appointment'>
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path='/dashboard/allPatients'>
              <AllPatients />
            </PrivateRoute>
            <Route path='/login'>
              <Login />
            </Route>
            <PrivateRoute path='/dashboard/addDoctor'>
              <AddDoctor />
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
