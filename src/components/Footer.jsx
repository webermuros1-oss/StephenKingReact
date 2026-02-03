const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add newsletter subscription logic here
    };

    return (
        <footer className="bg-black text-white pt-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-[#8a0303] text-xl font-bold mb-4 font-['Creepster']">
                            Acerca de Stephen King
                        </h3>
                        <p className="mb-4 text-gray-300 font-['Cinzel']">
                            Stephen King el "Maestro del Terror", cuyas novelas han redefinido el género.
                        </p>
                        <div className="flex gap-4 mb-4">
                            <a
                                href="https://www.facebook.com/todostephenking?locale=es_ES"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <img
                                    src="/images/aboutHe/logoFaceBook.png"
                                    alt="Facebook"
                                    className="h-8 w-8"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/stephenking/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <img
                                    src="/images/aboutHe/InstagramIcon.png"
                                    alt="Instagram"
                                    className="h-8 w-8"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/stephen-king-a393a3188/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <img
                                    src="/images/aboutHe/linkedin.png"
                                    alt="LinkedIn"
                                    className="h-8 w-8"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-[#8a0303] text-xl font-bold mb-4 font-['Creepster']">
                            Enlaces rápidos
                        </h3>
                        <ul className="space-y-2 font-['Cinzel']">
                            <li>
                                <a
                                    href="/autor"
                                    className="text-gray-300 hover:text-[#8a0303] transition-colors"
                                >
                                    Sobre Stephen King
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.amazon.es/stephen-king-merchandising/s?k=stephen+king+merchandising"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-[#8a0303] transition-colors"
                                >
                                    Productos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://stephenking.com.ar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-[#8a0303] transition-colors"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h3 className="text-[#8a0303] text-xl font-bold mb-4 font-['Creepster']">
                            Soporte Técnico
                        </h3>
                        <ul className="space-y-2 font-['Cinzel']">
                            <li>
                                <a
                                    href="/pdf/avisoLegal.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-[#8a0303] transition-colors"
                                >
                                    Aviso Legal
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/pdf/politicaPrivacidadDatos.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-[#8a0303] transition-colors"
                                >
                                    Política de Privacidad
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/pdf/condicionesGeneralesVenta.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-[#8a0303] transition-colors"
                                >
                                    Política de Ventas
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/pdf/politicaCookies(3).pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-[#8a0303] transition-colors"
                                >
                                    Política de Cookies
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h3 className="text-[#8a0303] text-xl font-bold mb-4 font-['Creepster']">
                            Newsletter
                        </h3>
                        <p className="mb-4 text-gray-300 font-['Cinzel']">
                            Suscríbete a nuestro boletín para recibir actualizaciones, novedades y ofertas
                            exclusivas.
                        </p>
                        <form onSubmit={handleSubmit} className="mb-4">
                            <div className="flex">
                                <input
                                    type="email"
                                    className="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-md focus:outline-none focus:border-[#8a0303]"
                                    placeholder="Enter your email"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-[#8a0303] text-white font-bold rounded-r-md hover:bg-[#6d0202] transition-colors"
                                >
                                    Suscríbete
                                </button>
                            </div>
                        </form>
                        <p className="text-sm text-gray-400 font-['Cinzel']">
                            Al suscribirse, acepta nuestra Política de privacidad y da su consentimiento para
                            recibir actualizaciones.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-800 mt-12">
                <div className="container mx-auto px-4">
                    <div className="py-6 flex flex-col md:flex-row justify-between items-center">
                        <h6 className="text-gray-400 mb-4 md:mb-0 font-['Cinzel']">
                            &copy; 2025 Stephen King. Todos los derechos reservados.
                        </h6>
                        <img
                            src="/images/aboutHe/logoStephenKingSinBordes.png"
                            alt="Logo Stephen King"
                            className="h-8 w-auto"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;