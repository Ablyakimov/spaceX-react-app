import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss'

const Header = ({ rockets, changeRocket }) => {
    return(
        <header className="header">
                <img src="img/logo.svg" alt="Logo Space X" className="logo" />
                <nav className="main-nav nav">
                    <ul className="list">
                        {
                            rockets.map((item, id) => (
                                <li key={id} className="item">
                                    <a 
                                    href="/"
                                    onClick={e => {
                                        e.preventDefault()
                                        changeRocket(item)
                                    }}
                                    className="item-link">{ item }</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <nav className="secondary-nav">
                    <ul className="list">
                        <li className="item">
                            <Link to="/" className="item-link">
                                Home
                            </Link>
                        </li>
                        <li className="item">
                            <Link to="/calendar" className="item-link">
                                Calendar
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}

export default Header