import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Newsletter subscription');
    };

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-grid">
                    {/* COLUMNA 1: LOGO SOLO */}
                    <div className="footer-section footer-section-logo">
                        <div className="footer-logo-section">
                            <img
                                src="/images/logo/logoStephen.png"
                                alt="Stephen King Logo"
                                className="footer-main-logo"
                            />
                        </div>
                    </div>

                    {/* COLUMNA 2: About + Social */}
                    <div className="footer-section">
                        <h3>Stephen King</h3>
                        <p>El "Maestro del Terror", cuyas novelas han redefinido el género del horror.</p>
                        <div className="footer-social">
                            <a href="https://www.facebook.com/todostephenking?locale=es_ES" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                <div className="footer-social-glow"></div>
                                <img src="/images/logo/logoFaceBook.png" alt="Facebook" className="footer-social-icon" />
                            </a>
                            <a href="https://www.instagram.com/stephenking/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                <div className="footer-social-glow"></div>
                                <img src="/images/logo/instagramIcon.png" alt="Instagram" className="footer-social-icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/stephen-king-a393a3188/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                <div className="footer-social-glow"></div>
                                <img src="/images/logo/linkedin.png" alt="LinkedIn" className="footer-social-icon" />
                            </a>
                        </div>
                    </div>

                    {/* COLUMNA 3: Enlaces Rápidos */}
                    <div className="footer-section">
                        <h3>Enlaces Rápidos</h3>
                        <ul className="footer-links">
                            <li><Link to="/autor" className="footer-link">Sobre Stephen King</Link></li>
                            <li><a href="https://www.amazon.es/stephen-king-merchandising/s?k=stephen+king+merchandising" target="_blank" rel="noopener noreferrer" className="footer-link">Productos</a></li>
                            <li><a href="https://stephenking.com.ar/" target="_blank" rel="noopener noreferrer" className="footer-link">Blog</a></li>
                        </ul>
                    </div>

                    {/* COLUMNA 4: Legal */}
                    <div className="footer-section">
                        <h3>Información Legal</h3>
                        <ul className="footer-links">
                            <li><a href="/pdf/avisoLegal.pdf" target="_blank" rel="noopener noreferrer" className="footer-link">Aviso Legal</a></li>
                            <li><a href="/pdf/politicaPrivacidadDatos.pdf" target="_blank" rel="noopener noreferrer" className="footer-link">Privacidad</a></li>
                            <li><a href="/pdf/condicionesGeneralesVenta.pdf" target="_blank" rel="noopener noreferrer" className="footer-link">Ventas</a></li>
                            <li><a href="/pdf/politicaCookies.pdf" target="_blank" rel="noopener noreferrer" className="footer-link">Cookies</a></li>
                        </ul>
                    </div>

                    {/* COLUMNA 5: Newsletter ARRIBA */}
                    <div className="footer-section">
                        <h3>Newsletter</h3>
                        <p>Recibe las últimas novedades y ofertas exclusivas.</p>
                        <form onSubmit={handleSubmit} className="footer-newsletter-form">
                            <input type="email" placeholder="tu@email.com" className="footer-newsletter-input" required />
                            <button type="submit" className="footer-newsletter-button">Suscribirse</button>
                        </form>
                        <p className="footer-newsletter-disclaimer">Al suscribirte aceptas nuestra política de privacidad.</p>
                    </div>
                </div>
            </div>

            {/* Bottom centrado */}
            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p className="footer-copyright">© 2025 Stephen King. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
