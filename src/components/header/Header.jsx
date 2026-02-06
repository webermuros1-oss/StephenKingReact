// src/components/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-main">
                    
                    <Link to="/" className="logo-section group">
                        <div className="logo-container">
                            <div className="logo-glow"></div>
                            <img
                                src="/images/logo/logoStephen.png"
                                alt="Stephen King Logo"
                                className="logo-img"
                            />
                        </div>
                        <h1 className="logo-title">STEPHEN KING</h1>
                    </Link>

                    
                    <div className="desktop-nav">
                        <Link to="/" className="nav-link group">
                            <span className="nav-link-text">Inicio</span>
                            <div className="nav-link-bg"></div>
                        </Link>
                        <Link to="/autor" className="nav-link group">
                            <span className="nav-link-text">Autor</span>
                            <div className="nav-link-bg"></div>
                        </Link>
                    </div>

                    
                    <button
                        className="mobile-button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="mobile-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                
                <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-nav-container">
                        <Link
                            to="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="mobile-nav-link"
                        >
                            Inicio
                        </Link>
                        <Link
                            to="/autor"
                            onClick={() => setIsMenuOpen(false)}
                            className="mobile-nav-link"
                        >
                            Autor
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
