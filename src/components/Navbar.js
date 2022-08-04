import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu} src="images/logo192.jpg">
            BA
            <image src="images/logo192.jpg" ></image>
            <i class="fa-duotone fa-brain-circuit"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' data-text="Home" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/blog'
                className='nav-links'
                data-text="Blog"
                onClick={closeMobileMenu}
              >
                
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                data-text="Projects"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li>
            </li>
          </ul>
          <div className='social-icons'>
          <a
              class='social-icon-link linkedin'
              href="https://www.linkedin.com/in/brandon-adams-93966b239"
              aria-label='LinkedIn'
              style={{}}
            >
              <i class='fab fa-linkedin' />
            </a>
            <a
              class='social-icon-link linkedin'
              href="https://github.com/brandonadams21"
              aria-label='LinkedIn'
              style={{marginLeft: '14px'}}
            >
              <i class='fab fa-github' />
            </a>
            </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
