import { useState, useEffect } from 'react';
import axios from 'axios';
import './BooksTable.css';

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
            <div className="books-table-loading">
                <div className="spinner"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="books-table-error">
                <p className="books-table-error-text">{error}</p>
            </div>
        );
    }

    return (
        <div className="books-table-section">
            <div className="container">
                <h2 className="books-table-title">Libros de Stephen King</h2>

                <div className="books-table-wrapper">
                    <div className="books-table-scroll">
                        <table className="books-table">
                            <thead>
                                <tr>
                                    <th>Año</th>
                                    <th>Título</th>
                                    <th>Editorial</th>
                                    <th>Páginas</th>
                                    <th>Villanos</th>
                                    <th>Nominaciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book, index) => {
                                    const villains = book.villains?.length
                                        ? book.villains.map((v) => v.name).join(', ')
                                        : 'Sin villanos';

                                    const notes = book.Notes?.length
                                        ? book.Notes.join(', ')
                                        : 'Sin notas';

                                    return (
                                        <tr key={index}>
                                            <td>{book.Year}</td>
                                            <td className="books-table-title-cell">{book.Title}</td>
                                            <td>{book.Publisher}</td>
                                            <td>{book.Pages}</td>
                                            <td>{villains}</td>
                                            <td>{notes}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="books-table-info">
                    <p className="books-table-info-text">Total de libros: {books.length}</p>
                </div>
            </div>
        </div>
    );
};

export default BooksTable;