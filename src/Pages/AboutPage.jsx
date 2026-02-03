import Header from './components/Header';
import Footer from './components/Footer';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-black">
            <Header />

            {/* Title Section */}
            <div className="bg-gradient-to-b from-[#8a0303] to-black py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-center text-white font-['Creepster'] tracking-wider">
                        MAESTRO DEL TERROR
                    </h1>
                </div>
            </div>

            <main className="container mx-auto px-4 py-12">
                {/* Movie Card */}
                <div className="mb-12">
                    <a href="/videos/peliculaCarrie.mp4" className="block">
                        <img
                            src="/images/aboutHe/cartelCarrie.jpg"
                            alt="Ultimo estreno en cines Stephen King"
                            className="w-full rounded-lg shadow-2xl hover:shadow-[#8a0303]/50 transition-shadow duration-300"
                        />
                    </a>
                </div>

                {/* Author Card */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-800 mb-12">
                    {/* Image */}
                    <div className="relative h-[400px] lg:h-auto">
                        <img
                            src="/images/aboutHe/stephenKingPhoto.jpg"
                            alt="Foto retrato Stephen King"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        <h2 className="text-4xl font-bold text-[#8a0303] mb-4 font-['Creepster']">
                            STEPHEN EDWIN KING
                        </h2>

                        <div className="flex flex-wrap gap-4 mb-6">
                            <span className="px-4 py-2 bg-[#8a0303] text-white rounded-full text-sm font-['Cinzel']">
                                Edad 78 años
                            </span>
                            <span className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-['Cinzel']">
                                Maestro del Terror
                            </span>
                        </div>

                        <div className="max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                            <p className="text-gray-300 leading-relaxed font-['Cinzel'] text-justify">
                                (Portland, Maine, 21 de septiembre de 1947), también conocido por su
                                pseudónimo Richard Bachman, es un escritor estadounidense de novelas
                                de terror, ficción sobrenatural, misterio, ciencia ficción y
                                literatura fantástica. Sus libros han vendido más de 500 millones de
                                ejemplares y en su mayoría han sido adaptados al cine y a la
                                televisión. Ha publicado 65 novelas, once colecciones de relatos y
                                novelas cortas, y siete libros de no ficción, además de un guión
                                cinematográfico, entre otras obras.
                                <br /><br />
                                Desdeñado por críticos y académicos literarios por ser considerado un autor «comercial», su
                                obra ha generado mayor atención desde la década de 1990, aunque
                                algunos de esos círculos continúan rechazando sus libros. Es
                                criticado regularmente por su estilo presuntamente «no literario» y
                                por la excesiva extensión de algunas de sus novelas. Por el
                                contrario, su sentido de la narración, sus personajes animados y
                                coloridos y su capacidad para jugar con los temores de los lectores
                                han sido objeto de elogios.
                                <br /><br />
                                Si bien en varias de sus historias utiliza el recurso del terror, también aborda de manera regular
                                temas como la infancia, el racismo y la guerra, brindando un retrato
                                social muy realista de los Estados Unidos. Su novela corta «Rita
                                Hayworth y la redención de Shawshank» fue la base para la película
                                de Frank Darabont The Shawshank Redemption, la mejor calificada de
                                IMDb y votada por la revista Empire como la mejor de la historia en
                                su encuesta The 201 Greatest Movies of All Time en marzo de 2006.
                                <br /><br />
                                Otras adaptaciones cinematográficas de sus obras que han
                                logrado éxito comercial y de crítica son Carrie, dirigida por Brian
                                De Palma en 1976; El resplandor, dirigida por Stanley Kubrick en
                                1980; Cuenta conmigo y Misery, dirigidas por Rob Reiner en 1986 y
                                1990, ganadora la última de un Premio Óscar y un Globo de Oro
                                gracias al desempeño de Kathy Bates como actriz principal y de nuevo
                                con Frank Darabont, La milla verde (1999); y La niebla (2007).
                                <br /><br />
                                El propio King ha incursionado ocasionalmente como guionista, productor
                                y actor en algunas series de televisión y películas, y también
                                dirigió el largometraje Maximum Overdrive. King ha ganado numerosos
                                premios literarios, incluyendo el Premio Bram Stoker en trece
                                ocasiones, el Premio British Fantasy siete veces, los Premios Locus
                                en cinco oportunidades, el Premio Mundial de Fantasía cuatro veces,
                                el Premio Edgar en dos ocasiones y los premios Hugo y O. Henry en
                                una oportunidad.
                                <br /><br />
                                Al ser nativo de Maine, muchas de sus historias se
                                desarrollan en ese estado. También es frecuente su uso de ciudades
                                ficticias ubicadas en Maine, como Castle Rock, Jerusalem's Lot y
                                Derry. King es un gran admirador del escritor H. P. Lovecraft y ha
                                incorporado varias de sus técnicas (como la conexión entre las
                                historias de sus libros, la utilización de recortes de periódicos,
                                transcripciones de prueba, otros materiales de documentación, y el
                                uso de pueblos ficticios como Castle Rock y Derry) en sus novelas,
                                pero se diferencia de él por su caracterización extensa, el uso de
                                la tercera persona y no de la primera, mayor y mejor uso de un
                                diálogo efectivo, incorporación del costumbrismo e historias con
                                finales positivos, todos estos inexistentes en los relatos de
                                Lovecraft.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                <div className="relative rounded-lg overflow-hidden shadow-2xl group">
                    <div className="relative">
                        <video
                            loop
                            controls
                            className="w-full"
                            poster="/images/video-poster.jpg"
                        >
                            <source src="/videos/trailerLibroFinal.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <a
                            href="https://www.amazon.es/tengas-miedo-%C3%89xitos-Stephen-King/dp/8401036836/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            aria-label="Ver libro en Amazon"
                        >
                            <span className="px-8 py-4 bg-[#8a0303] text-white font-bold rounded-lg text-xl font-['Creepster'] hover:bg-[#6d0202] transition-colors">
                                Ver en Amazon
                            </span>
                        </a>
                    </div>
                </div>
            </main>

            <Footer />

            <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
        width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
        background: #1f2937;
        border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
        background: #8a0303;
        border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #6d0202;
        }
        `}</style>
        </div>
    );
};

export default AboutPage;