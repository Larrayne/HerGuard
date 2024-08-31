import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './App.css';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // Hook for navigation

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validateForm(values);
        setErrors(validationErrors);
    
        if (Object.keys(validationErrors).length === 0) {
            try {
                // Sign in user with email and password
                await signInWithEmailAndPassword(auth, values.email, values.password);
                
                // Redirect to home page or dashboard
                navigate('/'); // Adjust the path according to your routing setup
            } catch (error) {
                console.error('Error logging in:', error.message);
                setErrors({ ...errors, firebase: error.message });
            }
        }
    };

    const validateForm = (values) => {
        let errors = {};
        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!values.email) errors.email = "Email is required";
        else if (!email_pattern.test(values.email)) errors.email = "Invalid email address";
        if (!values.password) errors.password = "Password is required";

        return errors;
    };

    return (
        <div className='d-flex justify-content-center align-items-center custom-bg vh-100'>
            <div className='bg-pink p-3 rounded w-25'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='email' value={values.email} onChange={handleInput} className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'> {errors.email} </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password' value={values.password} onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'> {errors.password} </span>}
                    </div>
                    {errors.firebase && <div className='text-danger'>{errors.firebase}</div>}
                    <button type='submit' className='custom-button w-100 rounded-0'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
