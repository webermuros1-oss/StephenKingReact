import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-blood-red/30 shadow-lg shadow-blood-red/10">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-4 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blood-red blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <img
                                src="public/images/logo/logoStephen.png"
                                alt="Stephen King Logo"
                                className="h-14 w-auto relative z-10 drop-shadow-2xl"
                            />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-creepster tracking-wider bg-gradient-to-r from-white via-red-100 to-blood-red bg-clip-text text-transparent">
                            STEPHEN KING
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            to="/"
                            className="relative px-4 py-2 font-cinzel text-white hover:text-blood-red transition-all duration-300 group"
                        >
                            <span className="relative z-10">Inicio</span>
                            <div className="absolute inset-0 bg-blood-red/0 group-hover:bg-blood-red/10 rounded-lg transition-all duration-300"></div>
                        </Link>
                        <Link
                            to="/autor"
                            className="relative px-4 py-2 font-cinzel text-white hover:text-blood-red transition-all duration-300 group"
                        >
                            <span className="relative z-10">Autor</span>
                            <div className="absolute inset-0 bg-blood-red/0 group-hover:bg-blood-red/10 rounded-lg transition-all duration-300"></div>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative p-2 text-white hover:text-blood-red transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-48 mt-4' : 'max-h-0'}`}>
                    <div className="flex flex-col gap-3 p-4 bg-black/40 backdrop-blur-lg rounded-lg border border-blood-red/20">
                        <Link
                            to="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="px-4 py-2 font-cinzel text-white hover:text-blood-red hover:bg-blood-red/10 rounded-lg transition-all duration-300"
                        >
                            Inicio
                        </Link>
                        <Link
                            to="/autor"
                            onClick={() => setIsMenuOpen(false)}
                            className="px-4 py-2 font-cinzel text-white hover:text-blood-red hover:bg-blood-red/10 rounded-lg transition-all duration-300"
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