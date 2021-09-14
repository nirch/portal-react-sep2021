import React, { useState } from 'react';
import './navbar.css';
import logoImg from '../../assets/images/logo/bg_logo.png';
import bookImg from '../../assets/images/menuicons/book.png';
import checkImg from '../../assets/images/menuicons/check.png';
import userImg from '../../assets/images/menuicons/user.png';
import timeImg from '../../assets/images/menuicons/time.png';
import offImg from '../../assets/images/menuicons/off.png';
import arrowImg from '../../assets/images/menuicons/arrow.png';
import profileImg from '../../assets/images/menuicons/profile.png'

const PortalNavbar = (props) => {
    const { handleLogout } = props;
    const { title } = props;
    const userName = "Admin"
    const userId = 123;

    const [isOpen, setIsOpen] = useState(false);
    const [showItems, setShowItems] = useState(false);

    return (
        <div className="c-navbar">
            <div className="sidebar-close">
                <div className="hamburger-btn" onClick={() => setIsOpen(true)}>
                    <div className="humberger-rectangle"></div>
                    <div className="humberger-rectangle"></div>
                    <div className="humberger-rectangle"></div>
                </div>
                <div className="navbar-title">{title}</div>
            </div>
            <div className={isOpen ? "sidebar-open" : ""}>
                <div className="sidebar-background" onClick={() => setIsOpen(false)}></div>
                <div className="sidebar-wrap">
                    <div className="sidebar">
                        <div className="sidebar-header">
                            <img className="appleseeds-logo" src={logoImg} />
                            <div className="close-btn" onClick={() => setIsOpen(false)}>
                                <div className="slant-pos"></div>
                                <div className="slant-nag"></div>
                            </div>
                        </div>
                        <div className="profile-preview">
                            <img className="profile-image" src={profileImg}></img>
                            <div className="name-wrap">
                                {userName}
                            </div>
                        </div>
                        <div className="sidebar-options">
                            <div className="menu-item menu-information">
                                <img className="user-icon" src={userImg} />
                                <a className="item-link" href="#/users">משתמשים</a>
                                <img className={`arrow-icon ${showItems ? "arrow-up" : "arrow-down"}`} src={arrowImg} onClick={() => setShowItems(!showItems)} />
                                <div className={showItems ? "user-items" : "hide-items"}>
                                    <a className="item-link" href="#/users">עובדים</a>
                                    <a className="item-link" href="#/users">חניכים</a>
                                    <a className="item-link" href="#/users">משתמשים חדשים</a>
                                </div>
                            </div>
                            <div className="menu-item menu-information">
                                <img className="book-icon" src={bookImg} />
                                <a className="item-link" href="#/courses">קורסים</a>
                            </div>
                            <div className="menu-item menu-information">
                                <img className="time-icon" src={timeImg} />
                                <a className="item-link" href="#//hours-report">דיווח שעות</a>
                            </div>
                            <div className="menu-item menu-information">
                                <img className="check-icon" src={checkImg} />
                                <a className="item-link" href="#/hours-approve">אישור שעות</a>
                            </div>
                            <div className="menu-item menu-information">
                                <img className="off-icon" src={offImg} />
                                <span className="item-link" onClick={handleLogout}>התנתקות</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default PortalNavbar;