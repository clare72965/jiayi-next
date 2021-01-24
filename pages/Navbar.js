import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'

function Navbar({ fixNavBar }) {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className={fixNavBar ? "nav_box fix" : "nav_box"}>
            <div>
                <Image src="/asset/logo.png" alt="嘉藝造霧工程行" width="200" height="50" />
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
