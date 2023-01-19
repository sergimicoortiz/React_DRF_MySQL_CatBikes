import React, { useEffect, useState } from "react";
import './Header.scss';
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [path, setPath] = useState('');


    const redirects = {
        home: () => navigate('/home'),
    }

    useEffect(() => {
        const path_tmp = location['pathname'].split('/')[1];
        setPath(path_tmp ? path_tmp : 'home');
    }, [location]);

    return (
        <nav className="navbar">
            <div className="container">

                <div className="navbar-header">
                    <button className="navbar-toggler" data-toggle="open-navbar1">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <a onClick={() => redirects.home()}>
                        <h4>Cat<span>Bikes</span></h4>
                    </a>
                </div>

                <div className="navbar-menu" id="open-navbar1">
                    <ul className="navbar-nav">
                        <li className={path === 'home' ? 'active' : ''}><a onClick={() => redirects.home()}>Home</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;