import React from 'react';
import { Outlet } from 'react-router-dom';
import Search from '../features/search/Search';
import CategoriesButtons from '../features/categories/Categories';
import Header from './Header';

function Root() {
  return (
    <div>
      <Header />
      <section className='container mx-auto'>
        <Search />
        <CategoriesButtons />
      </section>

      <main className='container mx-auto'>
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
