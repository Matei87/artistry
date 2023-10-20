import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { DownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';

import { Dropdown, Space } from 'antd';
import { items } from '../contstants';
import Logo from '../assets/logo.png';

const Navbar: FC = (): JSX.Element => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

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

      <button
        onClick={() => setIsMenuToggled(!isMenuToggled)}
        className='burger_menu'
      >
        {!isMenuToggled ? <MenuOutlined /> : <CloseOutlined />}
      </button>

      {isMenuToggled && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] drop-shadow-xl bg-orange-50 lg:hidden'>
          <ul className='ml-[33%] flex flex-col gap-10 text-2xl'>
            {/* {NAV_LINKS.map(({ href, key, label }: INAV_LINKS) => (
              <NavLink
                to={href}
                key={key}
                className='regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:text-black'
              >
                {label}
              </NavLink>
            ))} */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
