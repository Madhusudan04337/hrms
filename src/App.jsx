import React, { useState } from 'react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className='d-flex'>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <div className='main-content p-4' style={{ width: '100%' }}>
        <h1>{activePage.charAt(0).toUpperCase() + activePage.slice(1)}</h1>
      </div>
    </div>
  );
}
export default App;