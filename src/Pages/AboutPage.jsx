import Header from '../components/Header'
import Footer from '../components/Footer'

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-black">
            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blood-red/20 via-black to-black"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blood-red/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blood-red/5 rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative container mx-auto px-6 py-20">
                    <h1 className="text-6xl md:text-8xl font-creepster text-center bg-gradient-to-r from-white via-red-200 to-blood-red bg-clip-text text-transparent mb-4">
                        MAESTRO DEL TERROR
                    </h1>
                    <p className="text-center text-gray-400 font-cinzel text-lg max-w-2xl mx-auto">
                        Descubre la vida y obra del escritor que ha redefinido el género del horror
                    </p>
                </div>
            </section>

            {/* Movie Poster Section */}
            <section className="container mx-auto px-6 py-12">
                <div className="relative group overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <a href="/videos/peliculaCarrie.mp4" className="block">
                        <img
                            src="/images/aboutHe/cartelCarrie.jpg"
                            alt="Carrie - Último estreno"
                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </a>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-3xl font-creepster text-white mb-2">CARRIE</h3>
                        <p className="text-gray-300 font-cinzel">Su primera novela publicada</p>
                    </div>
                </div>
            </section>

            {/* Biography Section */}
            <section className="container mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Image */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blood-red to-dark-red rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative">
                            <img
                                src="/images/aboutHe/stephenKingPhoto.jpg"
                                alt="Stephen King"
                                className="w-full h-auto rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Bio Content */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-5xl font-creepster text-blood-red mb-4">
                                STEPHEN EDWIN KING
                            </h2>
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="px-4 py-2 bg-gradient-to-r from-blood-red to-dark-red text-white rounded-full text-sm font-cinzel font-semibold">
                                    78 años
                                </span>
                                <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-cinzel">
                                    Escritor
                                </span>
                                <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-cinzel">
                                    +500M libros vendidos
                                </span>
                            </div>
                        </div>

                        <div className="h-px bg-gradient-to-r from-blood-red via-gray-700 to-transparent"></div>

                        <div className="prose prose-invert max-w-none">
                            <div className="space-y-4 text-gray-300 font-cinzel leading-relaxed max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                                <p>
                                    <span className="text-blood-red font-bold">Portland, Maine, 21 de septiembre de 1947</span> — También conocido por su 
                                    pseudónimo Richard Bachman, es un escritor estadounidense de novelas 
                                    de terror, ficción sobrenatural, misterio, ciencia ficción y 
                                    literatura fantástica.
                                </p>
                                
                                <p>
                                    Sus libros han vendido más de <span className="text-blood-red font-bold">500 millones de ejemplares</span> y en su mayoría han sido adaptados al cine y a la 
                                    televisión. Ha publicado 65 novelas, once colecciones de relatos y 
                                    novelas cortas, y siete libros de no ficción.
                                </p>

                                <div className="bg-gray-900/50 border-l-4 border-blood-red p-4 my-6">
                                    <p className="text-sm italic">
                                        "El terror es el sentimiento más intenso que puede experimentar el ser humano."
                                    </p>
                                    <p className="text-xs text-gray-500 mt-2">— Stephen King</p>
                                </div>

                                <h3 className="text-xl font-creepster text-blood-red mt-6 mb-3">Obras Adaptadas al Cine</h3>
                                <ul className="list-none space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blood-red mt-1">▸</span>
                                        <span><strong>The Shawshank Redemption</strong> - La mejor película según IMDb</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blood-red mt-1">▸</span>
                                        <span><strong>El Resplandor</strong> - Dirigida por Stanley Kubrick (1980)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blood-red mt-1">▸</span>
                                        <span><strong>Carrie</strong> - Dirigida por Brian De Palma (1976)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blood-red mt-1">▸</span>
                                        <span><strong>Misery</strong> - Premio Óscar para Kathy Bates (1990)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blood-red mt-1">▸</span>
                                        <span><strong>La Milla Verde</strong> - Nominada a 4 Óscars (1999)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blood-red mt-1">▸</span>
                                        <span><strong>IT</strong> - Fenómeno cultural moderno (2017-2019)</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-creepster text-blood-red mt-6 mb-3">Premios y Reconocimientos</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-gray-900/50 p-3 rounded-lg">
                                        <p className="text-2xl font-bold text-blood-red">13×</p>
                                        <p className="text-sm">Premio Bram Stoker</p>
                                    </div>
                                    <div className="bg-gray-900/50 p-3 rounded-lg">
                                        <p className="text-2xl font-bold text-blood-red">7×</p>
                                        <p className="text-sm">British Fantasy</p>
                                    </div>
                                    <div className="bg-gray-900/50 p-3 rounded-lg">
                                        <p className="text-2xl font-bold text-blood-red">5×</p>
                                        <p className="text-sm">Premios Locus</p>
                                    </div>
                                    <div className="bg-gray-900/50 p-3 rounded-lg">
                                        <p className="text-2xl font-bold text-blood-red">4×</p>
                                        <p className="text-sm">World Fantasy</p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-creepster text-blood-red mt-6 mb-3">Influencias</h3>
                                <p>
                                    King es un gran admirador de <strong>H.P. Lovecraft</strong> y ha incorporado varias de sus técnicas, 
                                    aunque se diferencia por su caracterización extensa y el uso de finales positivos. 
                                    También ha sido influenciado por <strong>Edgar Allan Poe</strong> y <strong>Shirley Jackson</strong>.
                                </p>

                                <p>
                                    Muchas de sus historias se desarrollan en <strong>Maine</strong>, su estado natal, 
                                    utilizando ciudades ficticias como <span className="text-blood-red">Castle Rock</span>, 
                                    <span className="text-blood-red"> Jerusalem's Lot</span> y <span className="text-blood-red">Derry</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="container mx-auto px-6 py-12">
                <div className="relative group rounded-2xl overflow-hidden">
                    <video
                        loop
                        controls
                        className="w-full rounded-2xl shadow-2xl"
                        poster="/images/video-poster.jpg"
                    >
                        <source src="/videos/trailerLibroFinal.mp4" type="video/mp4" />
                    </video>
                    
                    <a
                        href="https://www.amazon.es/tengas-miedo-%C3%89xitos-Stephen-King/dp/8401036836/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <div className="text-center space-y-4">
                            <div className="w-20 h-20 bg-blood-red rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                                </svg>
                            </div>
                            <span className="block px-8 py-4 bg-blood-red text-white font-bold rounded-lg text-xl font-creepster">
                                Ver en Amazon
                            </span>
                        </div>
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default AboutPage