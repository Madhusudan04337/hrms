import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/dashboard';
import Chat from './components/chat';
import Feed from './components/feed';
import Employees from './components/employees';
import Recognition from './components/recogination';
import Event from './components/event';
import Profile from './components/profile';
import Settings from './components/settings';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard': return <Dashboard />;
      case 'chat': return <Chat />;
      case 'feed': return <Feed />;
      case 'employees': return <Employees />;
      case 'recogination': return <Recognition />;
      case 'event': return <Event />;
      case 'profile': return <Profile />;
      case 'settings': return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className='d-flex'>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <div className='main-content p-4' style={{ width: '100%' }}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;