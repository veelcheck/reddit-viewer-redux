import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  
  return (
    <header className='text-3xl font-quicksand container mx-auto text-center border-b-2 border-b-reddit-orange py-4'>
      <Link to='surpise-page'>
        <h1>
          <span className='text-reddit-orange '>reddit</span> viewer
        </h1>
      </Link>
      <div className='text-sm'>by Veelcheck</div>
    </header>
  );
}

export default Header 