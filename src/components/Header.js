import React from 'react';
import '../styles/Header.css';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div className='Header'>
            <h1>Andrew's Portfolio</h1>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        href="/"
                        onClick={() => handlePageChange('Home')}
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                        About Me
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    )
}