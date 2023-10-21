import { FC, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import DownArrow from '../assets/down.svg';
import Logo from '../assets/art.svg';
import { Items, items } from '../contstants';

const Navbar: FC = (): JSX.Element => {
  return (
    <nav>
      <NavLink
        to='/artistry/'
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <img className='logo' src={Logo} alt='logo' />
      </NavLink>
      <ul className='main_nav'>
        <li>
          <NavLink to='/artistry/'>Home</NavLink>
        </li>
        <li className='dropdown'>
          <div className='drop'>
            <p>Collection</p>
            <img src={DownArrow} alt='down_arrow' />
          </div>
          <div className='dropdown-content'>
            {items.map(({ key, label }: Items) => (
              <Fragment key={key}>{label}</Fragment>
            ))}
          </div>
        </li>
        <li>
          <HashLink to='/artistry/#contact'>Contact</HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
