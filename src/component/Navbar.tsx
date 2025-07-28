import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useScreenSize from '../hooks/useScreenSize';
import variables from '../variables';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loggedIn, setLoggedIn] = React.useState(variables.getIsLoggedIn());
    const [name, setName] = React.useState(variables.getUserName());

    React.useEffect(() => {
        setLoggedIn(variables.getIsLoggedIn());
        setName(variables.getUserName());
    }, []);

    const navigate = useNavigate();

    const handleLogout = () => {
        variables.setIsLoggedIn(false);
        variables.setUserName('');
        setLoggedIn(false);
        setName('');
        navigate('/login'); // React-friendly route change
    };


    const openNav = () => {
        setIsOpen(true);
    };

    const closeNav = () => {
        setIsOpen(false);
    };

    const screenSize = useScreenSize();
    useEffect(() => {
        if (screenSize.width > 768) {
            closeNav();
        }
    }, [screenSize.width]);

    return (
        <>
            <div className='nav-container'>
                <NavLink to='/'>
                    <img className='logo' src='./logo.png' alt='Logo Here'></img>
                </NavLink>
                {(screenSize.width < 768) ? <button className='list-button' onClick={openNav}><div>&#9776;</div></button> : <div className='link-container'>
                    <NavLink to='/chatbot' style={({ isActive }) =>
                        (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Ask our AI bot!</NavLink>
                    <NavLink to='/questions' style={({ isActive }) =>
                        (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Questions</NavLink>
                    <NavLink to='/about' style={({ isActive }) =>
                        (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>About</NavLink>
                    {loggedIn ? <div>
                        <div className='logout-container'>
                            <div className='flex flex-col mb-3'>
                                <hr className='border-2 border-white h-14 rounded-xl' />
                            </div>
                            <NavLink to='/profile'><div className='profile-name'>{name}</div></NavLink>
                            <NavLink to='/login' onClick={handleLogout}><i className="ri-logout-circle-line"></i>LogOut</NavLink>
                        </div>
                    </div> :
                        <div className="collab">
                            <NavLink to='/login' style={({ isActive }) =>
                                (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Login</NavLink>
                            <NavLink to='/signup' style={({ isActive }) =>
                                (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Signup</NavLink>
                        </div>}
                </div>
                }
            </div>
            <div>
                <div id="myNav" className={`overlay${(isOpen) ? ' open' : ''}`}>
                    <button className="closebtn" onClick={closeNav}>&times;</button>
                    <div className="overlay-content">
                        <NavLink to='/' style={({ isActive }) =>
                            (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Ask our AI bot!</NavLink>
                        <NavLink to='/about' style={({ isActive }) =>
                            (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>About</NavLink>
                        {loggedIn ? <div>
                            <div className='logout-container'>
                                <NavLink to='/profile'><div className='profile-name'>{name}</div></NavLink>
                                <NavLink to='/login' onClick={handleLogout}><i className="ri-logout-circle-line"></i>LogOut</NavLink>
                            </div>
                        </div> :
                            <div className="collab">
                                <NavLink to='/login' style={({ isActive }) =>
                                    (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Login</NavLink>
                                <NavLink to='/signup' style={({ isActive }) =>
                                    (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Signup</NavLink>
                            </div>}
                    </div>

                </div>
            </div >
        </>
    )
}

export default Navbar
