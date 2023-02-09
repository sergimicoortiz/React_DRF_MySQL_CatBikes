import React, { useEffect, useState, useContext } from "react";
import './Header.scss';
import { useNavigate, useLocation } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { useUser } from "../../hooks/useUser";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [path, setPath] = useState('');
    const { useLogout } = useUser();
    const { user, isAuth, isAdmin } = useContext(UserContext)


    const redirects = {
        home: () => navigate('/home'),
        dashboard: () => navigate('/dashboard'),
        stations: () => navigate('/stations'),
        login: () => navigate('/login'),
        profile: () => navigate('/profile'),
    }

    useEffect(() => {
        const path_tmp = location['pathname'].split('/')[1];
        setPath(path_tmp ? path_tmp : 'home');
    }, [location]);

    const UserOrButtons = isAuth ?
        (<>
            <li><a onClick={() => useLogout()}>Logout</a></li>
            <li className={path === 'profile' ? 'active' : ''} ><a onClick={() => redirects.profile()}>{user.username}</a></li>
        </>)
        : <li className={path === 'login' ? 'active' : path === 'register' ? 'active' : ''}><a onClick={() => redirects.login()}>Login</a></li>

    const dashboardButton = isAdmin ?
        <li className={path === 'dashboard' ? 'active' : ''}><a onClick={() => redirects.dashboard()}>Dashboard</a></li> :
        '';


    return (
        <nav className="navbar">
            <div className="container">

                <div className="navbar-header">
                    <a onClick={() => redirects.home()}>
                        <h4>Cat<span>Bikes</span></h4>
                    </a>
                </div>
                <div className="navbar-menu" id="open-navbar1">
                    <ul className="navbar-nav">
                        <li className={path === 'home' ? 'active' : ''}><a onClick={() => redirects.home()}>Home</a></li>
                        {dashboardButton}
                        <li className={path === 'stations' ? 'active' : ''}><a onClick={() => redirects.stations()}>Stations</a></li>
                        {UserOrButtons}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;