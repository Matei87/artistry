import { FC } from 'react';
import HeroImage from '../assets/hero.png';

const Hero: FC = (): JSX.Element => {
  return (
    <div className='hero'>
      <h1>ARTISTRY</h1>
      <img src={HeroImage} alt='hero' />
    </div>
  );
};

export default Hero;
