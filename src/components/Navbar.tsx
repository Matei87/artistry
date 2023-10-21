import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { items } from '../contstants';
import Logo from '../assets/logo.png';

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
        <li>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Collection
                <DownOutlined className='down_button' />
              </Space>
            </a>
          </Dropdown>
        </li>
        <li>
          <HashLink to='/artistry/#contact'>Contact</HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
