import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import './App.css'; 

function SignUp() {
    const [values, setValues] = useState({
        name: '',
        surname: '',
        email: '',
        number: '',
        Id: '',
        password: '',
        password2: ''
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
            const genderIndicator = parseInt(values.Id.substring(6, 10));
            if (genderIndicator >= 5000) {
                // Error if ID indicates male
                setErrors({ ...errors, Id: "Only female users are allowed to register" });
                return;
            }

            try {
                // Create user with email and password
                const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
                const user = userCredential.user;

                // Store additional user data in Firestore
                await setDoc(doc(db, 'users', user.uid), {
                    name: values.name,
                    surname: values.surname,
                    email: values.email,
                    phoneNumber: values.number,
                    idNumber: values.Id,
                    password: values.password
                });

                // Redirect to login page
                navigate('/Login');
            } catch (error) {
                console.error('Error signing up:', error.message);
                setErrors({ ...errors, firebase: error.message });
            }
        }
    };

    const validateForm = (values) => {
        let errors = {};
        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const number_pattern = /^0\d{9}$/;
        const id_pattern = /^\d{13}$/;
        const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

        if (!values.name) errors.name = "Name is required";
        if (!values.surname) errors.surname = "Surname is required";
        if (!values.email) errors.email = "Email is required";
        else if (!email_pattern.test(values.email)) errors.email = "Invalid email address";
        if (!values.number) errors.number = "Phone number is required";
        else if (!number_pattern.test(values.number)) errors.number = "Invalid phone number";
        if (!values.Id) errors.Id = "ID number is required";
        else if (!id_pattern.test(values.Id)) errors.Id = "Invalid ID number";
        if (!values.password) errors.password = "Password is required";
        else if (!password_pattern.test(values.password)) errors.password = "Password does not meet criteria";
        if (values.password !== values.password2) errors.password2 = "Passwords do not match";
        if (!values.password2) errors.password2 = "Please confirm your password";

        return errors;
    };

    return (
        <div className='d-flex justify-content-center align-items-center custom-bg vh-100'>
            <div className='bg-pink p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type='text' placeholder='Enter Name' name='name' value={values.name} onChange={handleInput} className='form-control rounded-0' />
                        {errors.name && <span className='text-danger'> {errors.name} </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='surname'><strong>Surname</strong></label>
                        <input type='text' placeholder='Enter Surname' name='surname' value={values.surname} onChange={handleInput} className='form-control rounded-0' />
                        {errors.surname && <span className='text-danger'> {errors.surname} </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='email' value={values.email} onChange={handleInput} className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'> {errors.email} </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='number'><strong>Phone Number</strong></label>
                        <input type='tel' placeholder='Enter Phone Number' name='number' value={values.number} onChange={handleInput} className='form-control rounded-0' />
                        {errors.number && <span className='text-danger'> {errors.number} </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Id'><strong>Identity Number</strong></label>
                        <input type='text' placeholder='Enter ID number' name='Id' value={values.Id} onChange={handleInput} className='form-control rounded-0' />
                        {errors.Id && <span className='text-danger'> {errors.Id} </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password' value={values.password} onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'> {errors.password} </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password2'><strong>Confirm Password</strong></label>
                        <input type='password' placeholder='Confirm Password' name='password2' value={values.password2} onChange={handleInput} className='form-control rounded-0' />
                        {errors.password2 && <span className='text-danger'> {errors.password2} </span>}
                    </div>
                    {errors.firebase && <div className='text-danger'>{errors.firebase}</div>}
                    <button type='submit' className='custom-button w-100 rounded-0'>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
