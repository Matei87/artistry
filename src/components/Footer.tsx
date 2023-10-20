import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  InstagramOutlined,
  MailOutlined,
  FacebookOutlined,
} from '@ant-design/icons';

const Footer: FC = (): JSX.Element => {
  return (
    <footer id='contact'>
      <h2>Contact</h2>
      <hr />
      <div className='inner'>
        <div className='info'>
          <p>Every artwork here is available for purchase.</p>
          <p>
            You can also place an order for a painting of any kind, made
            specially for you.
          </p>
          <p>
            For general enquiries, available artworks, and a price list, contact
            me on my social media profiles or my email.
          </p>
        </div>
        <div className='links'>
          <Link to='https://www.instagram.com'>
            <InstagramOutlined />
            instagram.com
          </Link>
          <Link to='https://www.google.com'>
            <MailOutlined /> contact@artistry.com
          </Link>
          <Link to='https://www.facebook.com'>
            <FacebookOutlined /> facebook.com
          </Link>
        </div>
      </div>
      <p className='made'>Made by Matei Mircea @ {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
