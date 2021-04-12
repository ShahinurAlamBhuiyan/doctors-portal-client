import React from 'react';
import { useHistory } from 'react-router';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    const history = useHistory()
    return (
        <main className='row d-flex align-items-center' style={{height:'600px'}}>
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Starts Here </h1>
                <p className='text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur nisi quisquam optio temporibus dignissimos quos nobis corporis quia culpa aliquam.</p>
                <button className='btn btn-brand' onClick={()=> history.push('/appointment')} >GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;