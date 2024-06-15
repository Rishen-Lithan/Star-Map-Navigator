import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const toggleBtnRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        const dropDownMenu = document.querySelector('.dropdown_menu');
        setIsOpen(!isOpen)

        dropDownMenu.classList.toggle('open');
    };

    const handleLogout = async () => {
        try {
            const reponse = await axios.get('http://localhost:3500/logout', {}, {
                withCredentials: true
            });

            if (reponse.status === 204) {
                document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                console.log('User logout successfully');
                navigate('/');
            } else {
                console.error('Logout failed : ', reponse.status);
            }
        } catch (error) {
            console.error('Logout failed : ', error.message);
        }
    }

    return (
        <header className='relative px-8 '>
            <div className="navbar">
                <div className="logo">
                    <Link to="#" className='text-base text-white no-underline hover:text-orange-400 sm:text-center'>StarMap Navigator</Link>
                </div>
                <ul className="links">
                    <li className='list-none'><Link to="/Home" className='text-base text-white no-underline hover:text-orange-400'>Home</Link></li>
                    <li className='list-none'><Link to="/Apod" className='text-base text-white no-underline hover:text-orange-400'>Apod</Link></li>
                    <li className='list-none'><Link to="/Mars" className='text-base text-white no-underline hover:text-orange-400'>Rover Images</Link></li>
                    <li className='list-none'><Link to="/Contact" className='text-base text-white no-underline hover:text-orange-400'>Contact</Link></li>
                </ul>
                <Link onClick={handleLogout} to="#" className='action_btn'>Log out</Link>
                <div className="toggle_btn" ref={toggleBtnRef} onClick={handleButtonClick}>
                    <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
                </div>
            </div>
            <div className={`dropdown_menu ${isOpen ? '' : 'open'}`}>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Apod">Apod</Link></li>
                <li><Link to="/Mars">Rover Images</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="#" className='action_btn' onClick={handleLogout}>Logout</Link></li>
            </div>
        </header>
        
    );
};

export default Navbar;
