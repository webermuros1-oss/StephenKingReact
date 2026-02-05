import { Link } from 'react-router-dom';

const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Newsletter subscription');
    };

    return (
        <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-blood-red/30">
            {/* Decorative top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blood-red to-transparent"></div>

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-creepster text-blood-red mb-4">
                            Stephen King
                        </h3>
                        <p className="text-gray-400 font-cinzel leading-relaxed">
                            El "Maestro del Terror", cuyas novelas han redefinido el género del horror.
                        </p>
                        <div className="flex gap-4 pt-4">
                            {[
                                { href: 'https://www.facebook.com/todostephenking?locale=es_ES', src: '/images/aboutHe/logoFaceBook.png', alt: 'Facebook' },
                                { href: 'https://www.instagram.com/stephenking/', src: '/images/aboutHe/InstagramIcon.png', alt: 'Instagram' },
                                { href: 'https://www.linkedin.com/in/stephen-king-a393a3188/', src: '/images/aboutHe/linkedin.png', alt: 'LinkedIn' }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-blood-red blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                                    <img
                                        src={social.src}
                                        alt={social.alt}
                                        className="h-10 w-10 object-contain relative z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-creepster text-blood-red mb-4">
                            Enlaces Rápidos
                        </h3>
                        <ul className="space-y-3 font-cinzel">
                            {[
                                { to: '/autor', label: 'Sobre Stephen King', internal: true },
                                { to: 'https://www.amazon.es/stephen-king-merchandising/s?k=stephen+king+merchandising', label: 'Productos' },
                                { to: 'https://stephenking.com.ar/', label: 'Blog' }
                            ].map((link, index) => (
                                <li key={index}>
                                    {link.internal ? (
                                        <Link to={link.to} className="text-gray-400 hover:text-blood-red transition-colors duration-300 flex items-center gap-2 group">
                                            <span className="w-0 h-px bg-blood-red group-hover:w-4 transition-all duration-300"></span>
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <a href={link.to} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blood-red transition-colors duration-300 flex items-center gap-2 group">
                                            <span className="w-0 h-px bg-blood-red group-hover:w-4 transition-all duration-300"></span>
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-creepster text-blood-red mb-4">
                            Información Legal
                        </h3>
                        <ul className="space-y-3 font-cinzel">
                            {[
                                { href: '/pdf/avisoLegal.pdf', label: 'Aviso Legal' },
                                { href: '/pdf/politicaPrivacidadDatos.pdf', label: 'Privacidad' },
                                { href: '/pdf/condicionesGeneralesVenta.pdf', label: 'Ventas' },
                                { href: '/pdf/politicaCookies(3).pdf', label: 'Cookies' }
                            ].map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blood-red transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="w-0 h-px bg-blood-red group-hover:w-4 transition-all duration-300"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-creepster text-blood-red mb-4">
                            Newsletter
                        </h3>
                        <p className="text-gray-400 font-cinzel text-sm leading-relaxed">
                            Recibe las últimas novedades y ofertas exclusivas.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blood-red transition-colors duration-300"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-blood-red to-dark-red text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blood-red/50 transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                Suscribirse
                            </button>
                        </form>
                        <p className="text-xs text-gray-500 font-cinzel">
                            Al suscribirte aceptas nuestra política de privacidad.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 font-cinzel text-sm">
                            © 2025 Stephen King. Todos los derechos reservados.
                        </p>
                        <img
                            src="/images/aboutHe/logoStephenKingSinBordes.png"
                            alt="Logo"
                            className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;