import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/pp.jpg`} alt="" />
      </Link>
      <header>
        <h2>Shawrup Kumer Suter</h2>
        <p><a href="mailto:shawrup.k.suter@gmail.com">shawrup.k.suter@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Shawrup. I am a tech geek. I love everything about technology.
        I am a <a href="https://buet.ac.bd/">Bangladesh University of Engineering and Technology</a> graduate and
        Software Engineer at <a href="https://konasl.com">Kona Software Lab Ltd.</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Shawrup K. Suter <Link to="/">bimurto.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
