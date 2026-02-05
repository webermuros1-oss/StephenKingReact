import { useState, useEffect } from 'react';
import axios from 'axios';

const BooksTable = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('https://stephen-king-api.onrender.com/api/books');
                setBooks(response.data.data || []);
                setLoading(false);
            } catch (err) {
                console.error('Error al cargar la API:', err);
                setError('No se pudieron cargar los libros de la API.');
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20 bg-black">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blood-red"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-20 bg-black">
                <p className="text-white text-xl font-cinzel">{error}</p>
            </div>
        );
    }

    return (
        <div className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blood-red font-creepster tracking-wider">
                    Libros de Stephen King
                </h2>

                <div className="overflow-x-auto rounded-lg border border-gray-800 shadow-2xl">
                    <div className="max-h-[600px] overflow-y-auto custom-scrollbar">
                        <table className="w-full text-left">
                            <thead className="bg-blood-red text-white sticky top-0 z-10">
                                <tr>
                                    <th className="px-6 py-4 font-creepster text-lg">Año</th>
                                    <th className="px-6 py-4 font-creepster text-lg">Título</th>
                                    <th className="px-6 py-4 font-creepster text-lg">Editorial</th>
                                    <th className="px-6 py-4 font-creepster text-lg">Páginas</th>
                                    <th className="px-6 py-4 font-creepster text-lg">Villanos</th>
                                    <th className="px-6 py-4 font-creepster text-lg">Nominaciones</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-900">
                                {books.map((book, index) => {
                                    const villains = book.villains?.length
                                        ? book.villains.map((v) => v.name).join(', ')
                                        : 'Sin villanos';

                                    const notes = book.Notes?.length
                                        ? book.Notes.join(', ')
                                        : 'Sin notas';

                                    return (
                                        <tr
                                            key={index}
                                            className="border-b border-gray-800 hover:bg-gray-800 transition-colors duration-200"
                                        >
                                            <td className="px-6 py-4 text-gray-300 font-cinzel">
                                                {book.Year}
                                            </td>
                                            <td className="px-6 py-4 text-white font-semibold font-cinzel">
                                                {book.Title}
                                            </td>
                                            <td className="px-6 py-4 text-gray-300 font-cinzel">
                                                {book.Publisher}
                                            </td>
                                            <td className="px-6 py-4 text-gray-300 font-cinzel">
                                                {book.Pages}
                                            </td>
                                            <td className="px-6 py-4 text-gray-300 font-cinzel max-w-xs truncate">
                                                {villains}
                                            </td>
                                            <td className="px-6 py-4 text-gray-300 font-cinzel max-w-xs truncate">
                                                {notes}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Table info */}
                <div className="mt-4 text-center">
                    <p className="text-gray-400 font-cinzel">
                        Total de libros: {books.length}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BooksTable;