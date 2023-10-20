import { FC } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Collections from '../components/Collections';

const Home: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <About />
      <Collections />
    </>
  );
};

export default Home;
