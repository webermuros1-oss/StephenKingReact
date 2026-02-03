import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-black border-b-2 border-[#8a0303]">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo and Title Section */}
                    <div className="flex items-center justify-center gap-4 w-full lg:w-1/2">
                        <a href="/" className="flex-shrink-0">
                            <img
                                src="/images/logo/StephenKingLogo.png"
                                alt="Stephen King Logo"
                                className="h-12 w-auto"
                            />
                        </a>
                        <h1 className="text-white text-xl md:text-2xl font-['Creepster'] tracking-wider">
                            STEPHEN KING
                        </h1>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex w-1/2 justify-around">
                        <ul className="flex justify-around w-full">
                            <li>
                                <a
                                    href="/autor"
                                    className="text-white hover:text-[#8a0303] transition-colors duration-300 font-['Cinzel']"
                                >
                                    Autor
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/libros"
                                    className="text-white hover:text-[#8a0303] transition-colors duration-300 font-['Cinzel']"
                                >
                                    Libros
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/obras"
                                    className="text-white hover:text-[#8a0303] transition-colors duration-300 font-['Cinzel']"
                                >
                                    Obras
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-48 mt-4' : 'max-h-0'
                        }`}
                >
                    <ul className="flex flex-col items-center gap-4 pb-4">
                        <li>
                            <a
                                href="/autor"
                                className="text-white hover:text-[#8a0303] transition-colors duration-300 font-['Cinzel']"
                            >
                                Autor
                            </a>
                        </li>
                        <li>
                            <a
                                href="/libros"
                                className="text-white hover:text-[#8a0303] transition-colors duration-300 font-['Cinzel']"
                            >
                                Libros
                            </a>
                        </li>
                        <li>
                            <a
                                href="/obras"
                                className="text-white hover:text-[#8a0303] transition-colors duration-300 font-['Cinzel']"
                            >
                                Obras
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;