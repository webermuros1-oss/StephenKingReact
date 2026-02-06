
import './AboutPage.css'

const AboutPage = () => {
    return (
        <div className="about-page">
            

            {/* Hero Section */}
            <section className="about-hero">
            
                <div className="container about-hero-content">
                    <h1 className="about-hero-title">
                        MAESTRO DEL TERROR
                    </h1>
                    <p className="about-hero-subtitle">
                        Descubre la vida y obra del escritor que ha redefinido el género del horror
                    </p>
                </div>
            </section>

            

            {/* Biography Section */}
            <section className="about-bio">
                <div className="container">
                    <div className="about-bio-grid">
                        {/* Image */}
                        <div className="about-bio-image-wrapper">
                            <div className="about-bio-glow"></div>
                            <div className="about-bio-image-container">
                                <img
                                    src="/images/aboutHe/stephenKingPhoto.jpg"
                                    alt="Stephen King"
                                    className="about-bio-image"
                                />
                            </div>
                        </div>

                        {/* Bio Content */}
                        <div className="about-bio-content">
                            <div className="about-bio-header">
                                <h2>STEPHEN EDWIN KING</h2>
                                <div className="about-bio-badges">
                                    <span className="about-bio-badge about-bio-badge-primary">
                                        78 años
                                    </span>
                                    <span className="about-bio-badge about-bio-badge-secondary">
                                        Escritor
                                    </span>
                                    <span className="about-bio-badge about-bio-badge-secondary">
                                        +500M libros vendidos
                                    </span>
                                </div>
                            </div>

                            <div className="about-bio-divider"></div>

                            <div className="about-bio-text">
                                <p>
                                    <strong>Portland, Maine, 21 de septiembre de 1947</strong> — También conocido por su 
                                    pseudónimo Richard Bachman, es un escritor estadounidense de novelas 
                                    de terror, ficción sobrenatural, misterio, ciencia ficción y 
                                    literatura fantástica.
                                </p>
                                
                                <p>
                                    Sus libros han vendido más de <strong>500 millones de ejemplares</strong> y en su mayoría han sido adaptados al cine y a la 
                                    televisión. Ha publicado 65 novelas, once colecciones de relatos y 
                                    novelas cortas, y siete libros de no ficción.
                                </p>

                                <div className="about-bio-quote">
                                    <p>
                                        "El terror es el sentimiento más intenso que puede experimentar el ser humano."
                                    </p>
                                    <p className="about-bio-quote-author">— Stephen King</p>
                                </div>

                                <h3 className="about-bio-subtitle">Obras Adaptadas al Cine</h3>
                                <ul className="about-bio-list">
                                    <li>
                                        <span className="about-bio-list-icon">▸</span>
                                        <span><strong>The Shawshank Redemption</strong> - La mejor película según IMDb</span>
                                    </li>
                                    <li>
                                        <span className="about-bio-list-icon">▸</span>
                                        <span><strong>El Resplandor</strong> - Dirigida por Stanley Kubrick (1980)</span>
                                    </li>
                                    <li>
                                        <span className="about-bio-list-icon">▸</span>
                                        <span><strong>Carrie</strong> - Dirigida por Brian De Palma (1976)</span>
                                    </li>
                                    <li>
                                        <span className="about-bio-list-icon">▸</span>
                                        <span><strong>Misery</strong> - Premio Óscar para Kathy Bates (1990)</span>
                                    </li>
                                    <li>
                                        <span className="about-bio-list-icon">▸</span>
                                        <span><strong>La Milla Verde</strong> - Nominada a 4 Óscars (1999)</span>
                                    </li>
                                    <li>
                                        <span className="about-bio-list-icon">▸</span>
                                        <span><strong>IT</strong> - Fenómeno cultural moderno (2017-2019)</span>
                                    </li>
                                </ul>

                                <h3 className="about-bio-subtitle">Premios y Reconocimientos</h3>
                                <div className="about-bio-awards">
                                    <div className="about-bio-award">
                                        <p className="about-bio-award-number">13×</p>
                                        <p className="about-bio-award-text">Premio Bram Stoker</p>
                                    </div>
                                    <div className="about-bio-award">
                                        <p className="about-bio-award-number">7×</p>
                                        <p className="about-bio-award-text">British Fantasy</p>
                                    </div>
                                    <div className="about-bio-award">
                                        <p className="about-bio-award-number">5×</p>
                                        <p className="about-bio-award-text">Premios Locus</p>
                                    </div>
                                    <div className="about-bio-award">
                                        <p className="about-bio-award-number">4×</p>
                                        <p className="about-bio-award-text">World Fantasy</p>
                                    </div>
                                </div>

                                <h3 className="about-bio-subtitle">Influencias</h3>
                                <p>
                                    King es un gran admirador de <strong>H.P. Lovecraft</strong> y ha incorporado varias de sus técnicas, 
                                    aunque se diferencia por su caracterización extensa y el uso de finales positivos. 
                                    También ha sido influenciado por <strong>Edgar Allan Poe</strong> y <strong>Shirley Jackson</strong>.
                                </p>

                                <p>
                                    Muchas de sus historias se desarrollan en <strong>Maine</strong>, su estado natal, 
                                    utilizando ciudades ficticias como <span style={{color: 'var(--blood-red)'}}>Castle Rock</span>, 
                                    <span style={{color: 'var(--blood-red)'}}> Jerusalem's Lot</span> y <span style={{color: 'var(--blood-red)'}}>Derry</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
            
        </div>
    )
}

export default AboutPage