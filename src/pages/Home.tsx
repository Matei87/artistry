import { FC } from 'react';
import Collections from '../components/Collections';
import About from '../components/About';
import Hero from '../components/Hero';

const Home: FC = (): JSX.Element => {
  return (
    <div id='home'>
      <Hero />
      <About />
      <Collections />
    </div>
  );
};

export default Home;
