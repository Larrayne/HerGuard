import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 
import Validation from './SignupValidation';

function SignUp() {

    const [values, setValues] = useState({
        name: '',
        surname: '',
        email: '',
        number: '',
        password: '',
        password2: ''
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
                <h2>Sign-Up</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type='text' placeholder='Enter Name' name='name'
                        onChange={handleInput} className='form-control rounded-0' />
                        {errors.name && <span className='text-danger'> {errors.name} </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='surname'><strong>Surname</strong></label>
                        <input type='text' placeholder='Enter Surname' name='surname'
                        onChange={handleInput} className='form-control rounded-0' />
                        {errors.surname && <span className='text-danger'> {errors.surname} </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='email'
                        onChange={handleInput} className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'> {errors.email} </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='phone'><strong>Phone Number</strong></label>
                        <input type='tel' placeholder='Enter Phone Number' name='number'
                        onChange={handleInput} className='form-control rounded-0' />
                        {errors.number && <span className='text-danger'> {errors.number} </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password'
                        onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'> {errors.password} </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='confirm-password'><strong>Re-enter Password</strong></label>
                        <input type='password' placeholder='Re-enter Password' name='password2'
                        onChange={handleInput} className='form-control rounded-0' />
                        {errors.password2 && <span className='text-danger'> {errors.password2} </span>}
                    </div>
                    <button type='submit' className='custom-button w-100 rounded-0'>Sign Up</button>
                    <p></p>
                    <Link to="/main-page" className='custom-button w-100 rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
