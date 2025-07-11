import React from 'react';
import {FaTachometerAlt, FaComments, FaUsers,FaRegThumbsUp, FaCalendarAlt, FaUserCircle,FaCog} from 'react-icons/fa';
import '../styles/Navbar.css';

console.log("navbar loaded");
const Sidebar = () => {
    return (
        <div className="side-navbar d-flex flex-column flex-shrink-0 p-3">
            <div className='logo-container text-center'>
                <img 
                    src="/images/logo.png" 
                    alt='HRMS logo'
                    className='img-fluid logo-img'/>
            </div>
            
            <div className="profile-container">
                <div className='profile-img-container d-flex justify-content-center align-items-center me-3'>
                    <img 
                    src="/images/maria.png" 
                    alt='Profile'
                    className='img-fluid profile-img'/>
                </div>
                <div className='profile-info'>
                    <p className='text-white fw-bold mb-0'>Maria</p>
                    <small>HR Manager</small>
                </div>
            </div>
            <ul className='nav nav-pills flex-clolumn mb-auto'>
                <li className='nav-item'><a href="#dashboard" className='nav-link text-white'><FaTachometerAlt className='me-2' />Dashboard</a></li>
                <li><a href="#chat" className='nav-link text-white'><FaComments className='me-2' />Chat</a></li>
                <li><a href="#employees" className='nav-link text-white'><FaUsers className='me-2' />Employees</a></li>
                <li><a href="#feed" className='nav-link text-white'><FaRegThumbsUp className='me-2' />Feed</a></li>
                <li><a href="#recognition" className='nav-link text-white'><FaRegThumbsUp className='me-2' />Recogination</a></li>
                <li><a href="#event" className='nav-link text-white'><FaCalendarAlt className='me-2' />Event</a></li>
                <li><a href="#profile" className='nav-link text-white'><FaUserCircle className='me-2' />Profile</a></li>
                <li><a href="#settings" className='nav-link text-white'><FaCog className='me-2' />Settings</a></li>
            </ul>
        </div>
    );
};
export default Sidebar;