import { useState, useEffect } from 'react';
import axios from 'axios';

const BookCards = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('public/cardsAndTable.json');
                setBooks(response.data.data || []);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('No se pudieron cargar los libros.');
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blood-red"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-20">
                <p className="text-white text-xl font-cinzel">{error}</p>
            </div>
        );
    }

    return (
        <div className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-[url('/images/texture.jpg')] opacity-10"></div>

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blood-red font-creepster tracking-wider">
                    Los 10 mejores libros de Stephen King
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {books.map((book, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blood-red/50 transition-all duration-300 transform hover:-translate-y-2 border border-gray-800 hover:border-blood-red"
                        >
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={book.image}
                                    alt={book.Title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-4">
                                <h4 className="text-xl font-bold text-white mb-2 font-creepster truncate">
                                    {book.Title}
                                </h4>
                                <div className="space-y-1 font-cinzel">
                                    <h5 className="text-blood-red font-semibold">
                                        Año: {book.Year}
                                    </h5>
                                    <h5 className="text-gray-300 text-sm">
                                        Editorial: {book.Publisher}
                                    </h5>
                                    <h5 className="text-gray-400 text-sm">
                                        ISBN: {book.ISBN}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookCards;