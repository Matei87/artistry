import { FC, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Spinner from './components/Spinner';

import Navbar from './components/Navbar';
const Home = lazy(() => import('./pages/Home'));
const Collection = lazy(() => import('./pages/Collection'));
import Footer from './components/Footer';

const App: FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/artistry/' element={<Home />} />
          <Route path='/artistry/collection/:title' element={<Collection />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
