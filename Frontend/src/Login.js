import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 
import Validation from './LoginValidation';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}));
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }

    return (
        <div className='d-flex justify-content-center align-items-center custom-bg vh-100'>
            <div className='bg-pink p-3 rounded w-25'>
                <h2>Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='email'
                        onChange={handleInput} className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'> {errors.email} </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password'
                        onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'> {errors.password} </span>}
                    </div>
                    <button type='submit' className='custom-button w-100 rounded-0'>Log in</button>
                    <p></p>
                    <Link to="/signup" className='custom-button w-100 rounded-0 text-decoration-none'>Sign Up</Link>
                    <div className='mt-2 text-center'>
                        <Link to="/forgot-password" className='custom-link'>Forgot Password?</Link>
                        <Link to="/guest" className='custom-link mt-2'>Sign in as Guest</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
