import React, { useState } from 'react'

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const { name, email, password, password2 } = user;

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log('Register Submit');
    }
    return (
        <div className="jumbotron mt-5">
            <form onSubmit={onSubmit}>
                <h4 className="text-center">Account Register</h4>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" name="name" value={name} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input className="form-control" type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" name="password" value={password} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Password</label>
                    <input className="form-control" type="password" name="password2" value={password2} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Register;