import React from 'react'

function Header() {
  return (
    <header className='text-3xl font-quicksand container mx-auto text-center border-b-2 border-b-reddit-orange py-4'>
      <h1>
        <span className='text-reddit-orange '>reddit</span> viewer
      </h1>
      <div className='text-sm'>by Veelcheck</div>
    </header>
  );
}

export default Header 