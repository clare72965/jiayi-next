import React, { useState } from 'react';
import Link from 'next/link'

function Navbar({ fixNavBar }) {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className={fixNavBar ? "nav_box fix" : "nav_box"}>
            <div>
                <img src={images.Logo.src} alt={images.Logo.alt} width="70%" />
            </div>
            <div className="nav_box_mobile" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <div className={click ? "nav_box_link active" : "nav_box_link inactive"}>
                <Link href="/Home">
                    <a>首頁</a>
                </Link>
                <Link href="/AchieveDisplay">
                    <a>成果展示</a>
                </Link>
                <Link href="/Contact">
                    <a>聯絡我們</a>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
