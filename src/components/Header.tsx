import { FC } from 'react';
import HeaderImage from '../assets/hero.png';

const Header: FC = (): JSX.Element => {
  return (
    <header>
      <h1>ARTISTRY</h1>
      <img src={HeaderImage} alt='header_image' />
    </header>
  );
};

export default Header;
