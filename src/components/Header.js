import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="bg-dark text-white text-center py-3">
        <h1>ScreenBytes</h1>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">ScreenBytes</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/reviews">Reviews</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;
