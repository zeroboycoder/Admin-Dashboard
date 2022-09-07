import React, { useEffect, useState } from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { slideDatas } from '../../Data/Data'
import { Menu } from "@mui/icons-material";
import Logo from '../../imgs/logo.png';

const NavBar = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname);
    const [showNav, setShowNav] = useState(false);

    const toggleSlider = () => setShowNav(!showNav)

    const goToRoute = (route : string) => {
        setSelected(route);
        toggleSlider();
    }

    return <div className='Nav'>
    <div className='backTap' style={showNav ? { display: "block"} : { display: "none"}} onClick={toggleSlider}></div>
        <div className="NavbarContainer">
            <div className="container">
                <div className="Navbar">
                    <div className="NavLogo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div onClick={toggleSlider}>
                        <Menu />
                    </div>
                </div>
            </div>
        </div>
        <div className='SlideDraw' style={showNav ? { transform: "translateX(70%)", transition: "all 0.3s" } : { transform: "translateX(170%)", transition: "all 0.3s" }}>
            {/* Logo */}
            <div className='logo'>
                <img src={Logo} alt="Logo" />
            </div>

            {/* Route Link */}
            <div className="routes">
                {slideDatas.map(data => <Link key={data.label} to={data.route} className={selected === data.route ? "active" : ""} onClick={() => goToRoute(data.route)}>
                    {data.icon}
                    <span>{data.label}</span>
                </Link>)}
            </div>
        </div></div>
}

export default NavBar;