import React from 'react';
import {FaTachometerAlt,FaChartBar,FaBookOpen, FaComments, FaUsers, FaCalendarAlt, FaUserCircle,FaCog} from 'react-icons/fa';
import '../styles/Sidebar.css';

console.log("Sidebar loaded");
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
                    src="/images/maria.jpg" 
                    alt='Profile'
                    className='img-fluid profile-img'/>
                </div>
                <div className='profile-info'>
                    <p className='text-white fw-bold mb-0'>Maria</p>
                    <small>HR Manager</small>
                </div>
            </div>

            {/*Navigation items */}

            <ul className='nav flex-column mb-auto'>
                <li className='nav-item w-100 mb-1'>
                    <button onClick={() => setActivePage('dashboard')} className={`nav-link text-white w-100 text-start ${activePage === 'dashboard'?'active':''}`}><FaTachometerAlt className='me-2' /><span className="nav-label">Dashboard</span> </button>
                </li>
                <li className='w-100 mb-1'><button onClick={() => setActivePage('chat')} className={`nav-link text-white w-100 text-start ${activePage === 'chat'?'active':''}`}><FaComments className='me-2' /><span className="nav-label">Chat</span></button></li>
                <li className='w-100 mb-1'><button onClick={() => setActivePage('employees')} className={`nav-link text-white w-100 text-start ${activePage === 'employees'?'active':''}`}><FaUsers className='me-2' /><span className="nav-label">Employees</span></button></li>
                <li className='w-100 mb-1'><button onClick={() => setActivePage('feed')} className={`nav-link text-white w-100 text-start ${activePage === 'feed'?'active':''}`}><FaBookOpen className='me-2' /><span className="nav-label">Feed</span></button></li>
                <li className='w-100 mb-1'><button onClick={() => setActivePage('recogination')} className={`nav-link text-white w-100 text-start ${activePage === 'recogination'?'active':''}`}><FaChartBar className='me-2' /><span className="nav-label">Recogination</span></button></li>
                <li className='w-100 mb-1'><button onClick={() => setActivePage('event')} className={`nav-link text-white w-100 text-start ${activePage === 'event'?'active':''}`}><FaCalendarAlt className='me-2' /><span className="nav-label">Event</span></button></li>
                <li className='w-100 mb-1'><button onClick={() => setActivePage('profile')} className={`nav-link text-white w-100 text-start ${activePage === 'profile'?'active':''}`}><FaUserCircle className='me-2' /><span className="nav-label">Profile</span></button></li>
                <li className='w-100 mb-1'><button onClick={() => setActivePage('settings')} className={`nav-link text-white w-100 text-start ${activePage === 'settings'?'active':''}`}><FaCog className='me-2' /><span className="nav-label">Settings</span></button></li>
            </ul>
        </div>
    );
};
export default Sidebar;