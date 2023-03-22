import React, { useState, useEffect } from 'react';
import './styles/Domains.css';

const Domains = () => {
  return (
    <>
      <div className='domains'>
        <div className='domains_title'>
          <h1>Domains</h1>
          <p> <span>&gt;</span> PROBLEM STATEMENTS WILL BE BASED ON THESE  <span>&lt;</span> </p>
        </div>
        <div className='domains_incomplete'>
          <h1>COMING  SOON</h1>
        </div>
      </div>
    </>
  )
}

export default Domains;