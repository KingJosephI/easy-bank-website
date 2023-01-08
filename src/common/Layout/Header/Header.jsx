import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <StaticImage
          class="header__logo"
          src="../../../images/logo.svg"
          alt="logo"
        />
        <ul className="header__menu">
          <li>
            <Link className="header__link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="header__link" to="#">
              About
            </Link>
          </li>
          <li>
            <Link className="header__link" to="#">
              Contact
            </Link>
          </li>
          <li>
            <Link className="header__link" to="#">
              Blog
            </Link>
          </li>
          <li>
            <Link className="header__link" to="#">
              Careers
            </Link>
          </li>
        </ul>
      </nav>

      <Link to="#" className="header__invite-btn">
        Requeste Invite
      </Link>
    </header>
  );
};

export default Header;
