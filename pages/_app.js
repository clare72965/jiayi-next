import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import '../styles/globals.scss';
import '../styles/Navbar.scss';
import '../styles/Home.scss';

import '../styles/AchieveDisplay.scss';
import '../styles/Contact.scss';
import '../styles/Footer.scss';

import React, { useState, useEffect } from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';


function MyApp({ Component, pageProps }) {

  const [navbar, setNavbar] = useState(false);
  const [topBtn, setTopBtn] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      if (t >= 500) {
        if (!navbar) setNavbar(true);
        if (!topBtn) setTopBtn(true);
      } else if (t <= 120) {
        if (navbar) setNavbar(false);
        if (topBtn) setTopBtn(false);
      }
      else if (t >= 120 && t <= 500) {
        if (!navbar) setNavbar(true);
        if (topBtn) setTopBtn(false);
      }
    }
  }, [navbar]);

  return (
    <div className="app">
      <Navbar fixNavBar={navbar} />
      <div className="page_layout">
        <Component {...pageProps} topBtn={topBtn} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
