import React from 'react';
import { Link } from 'react-router-dom';
import './ShareLocationStyling.css';

function ShareLocation() {
  return (
    <div className='d-flex justify-content-center align-items-center custom-bg vh-100'>
      <div className='bg-pink p-4 rounded' style={{ width: '320px' }}>
        <Link to="/main-page" className='custom-link'>Back</Link>
        <div className='tile-button'>
          Location Details
        </div>
        <p>Please enter the relevant information</p>
        <form>
          <div className='mb-3'>
            <label htmlFor='carDetails'><strong>Car Details (Number plates, car colour, etc)</strong></label>
            <input type='text' id='carDetails' placeholder='Enter Car Details' className='form-control custom-input' />
          </div>
          <div className='mb-3'>
            <label htmlFor='driverDetails'><strong>Driver Details (Name, clothing, etc.)</strong></label>
            <input type='text' id='driverDetails' placeholder='Enter Driver Details' className='form-control custom-input' />
          </div>
          <div className='mb-3'>
            <label htmlFor='surroundings'><strong>Description of surroundings (e.g., behind the tall building)</strong></label>
            <input type='text' id='surroundings' placeholder='Enter Surroundings Description' className='form-control custom-input' />
          </div>
          <button type='submit' className='custom-button-orange w-100'>Share Live Location</button>
        </form>
      </div>
    </div>
  );
}

export default ShareLocation;
