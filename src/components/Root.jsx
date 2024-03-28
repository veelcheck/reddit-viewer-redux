import React, {Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import Loading from './Loading';
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

      <main className='container mx-auto break-words'>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default Root;
