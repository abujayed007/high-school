import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <Link className='text-decoration-none ps-5 fw-bolder fs-5' to="/home">Home</Link>
            <Link className='text-decoration-none ps-5 fw-bolder fs-5' to="/services">Services</Link>
            <Link className='text-decoration-none ps-5 fw-bolder fs-5' to="/facility">Facility</Link>
            <Link className='text-decoration-none ps-5 fw-bolder fs-5' to="/contact">Contact</Link>
        </div>
    );
};

export default Header;