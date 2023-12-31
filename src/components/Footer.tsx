import { FC } from 'react';
import { Link } from 'react-router-dom';
import Instagram from '../assets/instagram.svg';
import Mail from '../assets/mail.svg';
import Facebook from '../assets/facebook.svg';

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
            <img src={Instagram} alt='instagram' />
            instagram.com
          </Link>
          <Link to='https://www.google.com'>
            <img src={Mail} alt='instagram' /> contact@artistry.com
          </Link>
          <Link to='https://www.facebook.com'>
            <img src={Facebook} alt='instagram' /> facebook.com
          </Link>
        </div>
      </div>
      <p className='made'>Made by Matei Mircea @ {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
