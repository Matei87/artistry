import { FC, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';

import Navbar from './components/Navbar';
const Home = lazy(() => import('./pages/Home'));
//import Home from './pages/Home';
//import Collection from './pages/Collection';
const Collection = lazy(() => import('./pages/Collection'));
import Footer from './components/Footer';

const App: FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <Spin
            size='large'
            style={{
              margin: '5rem 0',
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        }
      >
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
