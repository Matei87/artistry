import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection/:title' element={<Collection />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
