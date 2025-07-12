import React from 'react';
import {FaTachometerAlt, FaComments, FaUsers,FaRegThumbsUp, FaCalendarAlt, FaUserCircle,FaCog} from 'react-icons/fa';
import '../styles/Navbar.css';

console.log("navbar loaded");
const Sidebar = ( {setActivePage,activePage}) => {
    return (
        <div className="side-navbar d-flex flex-column flex-shrink-0 p-3">

            {/*HRMS Logo */}

            <div className='logo-container text-center'>
                <img 
                    src="/images/logo.png" 
                    alt='HRMS logo'
                    className='img-fluid logo-img'/>
            </div>
            
            {/* Profile Info */}

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

            {/*Navigation items */}

            <ul className='nav nav-pills flex-clolumn mb-auto'>
                <li className='nav-item'>
                    <button onClick={() => setActivePage('dashboard')} className={`nav-link text-white w-100 text-start ${activePage === 'dashboard'?'active':''}`}><FaTachometerAlt className='me-2' />Dashboard </button>
                </li>
                <li><button onClick={() => setActivePage('chat')} className={`nav-link text-white ${activePage === 'chat'?'active':''}`}><FaComments className='me-2' />Chat</button></li>
                <li><button onClick={() => setActivePage('employees')} className={`nav-link text-white ${activePage === 'employees'?'active':''}`}><FaUsers className='me-2' />Employees</button></li>
                <li><button onClick={() => setActivePage('feed')} className={`nav-link text-white ${activePage === 'feed'?'active':''}`}><FaRegThumbsUp className='me-2' />Feed</button></li>
                <li><button onClick={() => setActivePage('recogination')} className={`nav-link text-white ${activePage === 'recogination'?'active':''}`}><FaRegThumbsUp className='me-2' />Recogination</button></li>
                <li><button onClick={() => setActivePage('event')} className={`nav-link text-white ${activePage === 'event'?'active':''}`}><FaCalendarAlt className='me-2' />Event</button></li>
                <li><button onClick={() => setActivePage('profile')} className={`nav-link text-white ${activePage === 'profile'?'active':''}`}><FaUserCircle className='me-2' />Profile</button></li>
                <li><button onClick={() => setActivePage('settings')} className={`nav-link text-white ${activePage === 'settings'?'active':''}`}><FaCog className='me-2' />Settings</button></li>
            </ul>
        </div>
    );
};
export default Sidebar;