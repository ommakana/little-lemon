import React from 'react';
import './style.css';


export default function Nav() {
    const navLinks = [{
        name: 'Home',
        url: '#'
    },
    {
        name: 'Menu',
        url: '#'
    },
    {
        name: 'About',
        url: '#'
    },
    {
        name: 'Book',
        url: '#'
    }];

    return (
        <nav>
            <ul>
                {navLinks.map((list, idx) => <li key={idx}>
                    <a className="nav-link" href={list.url}>{list.name}</a>
                </li>)}
            </ul>

        </nav>
    );
};
