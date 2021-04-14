import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar'

const AddDoctor = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('mobile', info.mobile);

        fetch('https://gentle-caverns-92118.herokuapp.com/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
            
    }
    return (
        <section className='row'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="p-4 col-md-10" style={{backgroundColor: '#F4FDFB',left:0}}>
                <h5 className='text-brand'>Add a Doctor</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name='name' placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Mobile No.</label>
                        <input onBlur={handleBlur} type="number" className="form-control" name='mobile' placeholder="Mobile Number" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Upload image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Image" />
                    </div>

                    <button type="submit" className="btn btn-brand">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;