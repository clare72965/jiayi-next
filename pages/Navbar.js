import React, { useState } from 'react';
import Link from 'next/link'
import images from '../images'
import fetch from 'isomorphic-unfetch';

function Navbar({ fixNavBar, text }) {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className={fixNavBar ? "nav_box fix" : "nav_box"}>
            <div>
                <img src={images.Logo.src} alt={images.Logo.alt} width="70%" />
                <div>{text}</div>
            </div>
            <div className="nav_box_mobile" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <div className={click ? "nav_box_link active" : "nav_box_link inactive"}>
                <Link href="/Home" >
                    <a onClick={closeMobileMenu}>首頁</a>
                </Link>
                <Link href="/AchieveDisplay"  >
                    <a onClick={closeMobileMenu}>成果展示</a>
                </Link>
                <Link href="/Contact" >
                    <a onClick={closeMobileMenu} >聯絡我們</a>
                </Link>
            </div>
        </div>
    )
}

Navbar.getInitialProps = async ({ req, query }) => {
    console.log(req, query);
    if (req) return { text: 'hello server' }
    return { text: 'hello client' }
}

export default Navbar
