import React, { useEffect, useState } from 'react';
import './Slider.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { slideDatas } from '../../Data/Data'
import Logo from '../../imgs/logo.png';

const Slider = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname);

    const goToRoute = (route : string) => {
        setSelected(route);
    }

    return <>
        <div className='Slider'>
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
        </div></>
}

export default Slider;