import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 

function SignUp() {
    return (
        <div className='d-flex justify-content-center align-items-center custom-bg vh-100'>
            <div className='bg-pink p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form action="">
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type='text' placeholder='Enter Name' className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='surname'><strong>Surname</strong></label>
                        <input type='text' placeholder='Enter Surname' className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='phone'><strong>Phone Number</strong></label>
                        <input type='tel' placeholder='Enter Phone Number' className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='confirm-password'><strong>Re-enter Password</strong></label>
                        <input type='password' placeholder='Re-enter Password' className='form-control rounded-0' />
                    </div>
                    <button type='submit' className='custom-button w-100 rounded-0'>Sign Up</button>
                    <p></p>
                    <Link to="/" className='custom-button w-100 rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
