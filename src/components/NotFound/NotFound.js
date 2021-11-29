import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
           <div className='not-found'>
           <div className='d-flex align-items-end justify-content-center vh-100 btn-custom'>
      <Link to="/">
        <button className='btn btn-danger mx-2'>Back Home</button>
      </Link>
      <Link to="/contact">
        <button className='btn btn-danger mx-2'>Contact Us</button>
      </Link>
      </div>
           </div>
        
    );
};

export default NotFound;