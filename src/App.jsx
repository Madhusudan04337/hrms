import React from 'react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <div className='d-flex'>
      <Navbar />
      <div className='main-content p-4' style={{width:'100%'}}>
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};
export default App;
