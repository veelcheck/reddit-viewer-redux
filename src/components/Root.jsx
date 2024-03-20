import React from 'react';
import { Outlet } from 'react-router-dom';
import Search from '../features/search/Search';
import CategoriesButtons from '../features/categories/Categories';

function Root() {
  return (
    <div>
      <Search />
      <CategoriesButtons />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
