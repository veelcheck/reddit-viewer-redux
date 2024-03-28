import React, {Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import Search from '../features/search/Search';
import CategoriesButtons from '../features/categories/Categories';
import Header from './Header';

function Root() {
  return (
    <div>
      <Header />
      <section className='container mx-auto '>
        <Search />
        <CategoriesButtons />
      </section>

      <main className='container mx-auto'>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default Root;
