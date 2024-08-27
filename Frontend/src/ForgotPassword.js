import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the password reset logic here
        console.log('Password reset link sent to:', email);
        // After processing, you can redirect the user or display a success message
    };

    return (
        <div className='d-flex justify-content-center align-items-center custom-bg vh-100'>
            <div className='bg-pink p-3 rounded w-25'>
                <h2>Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            className='form-control rounded-0'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type='submit' className='custom-button w-100 rounded-0'>Send Reset Link</button>
                    <div className='mt-2 text-center'>
                        <Link to="/" className='custom-link'>Back to Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
