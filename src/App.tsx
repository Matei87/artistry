import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Footer from './components/Footer';

const App: FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/artistry/' element={<Home />} />
        <Route path='/artistry/collection/:title' element={<Collection />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
