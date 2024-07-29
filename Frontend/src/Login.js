import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Make sure to import your CSS file

function Login() {
    return (
        <div className='d-flex justify-content-center align-items-center custom-bg vh-100'>
            <div className='bg-pink p-3 rounded w-25'>
                <form action="">
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' className='form-control rounded-0' />
                    </div>
                    <button className='btn custom-button w-100 rounded-0'>Log in</button>
                    <p></p>
                    <Link to="/signup" className='btn custom-button w-100 rounded-0 text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
