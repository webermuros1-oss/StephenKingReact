import { useState, useEffect } from 'react';
import './BookCards.css';

const BookCards = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                console.log('🔄 Cargando JSON...');
                
                
                const response = await fetch('public/cardsAndTable.json');
                
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                
                const data = await response.json();
                console.log('📚 Datos cargados:', data);
                
                
                setBooks(data.data || data.books || data || []);
                setLoading(false);
            } catch (err) {
                console.error('❌ Error completo:', err);
                setError(`Error: ${err.message}`);
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return (
            <div className="book-cards-loading">
                <div className="spinner"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="book-cards-error" style={{padding: '2rem', color: 'white'}}>
                <p>{error}</p>
                <p style={{fontSize: '0.8rem', opacity: 0.7}}>Ver consola F12</p>
            </div>
        );
    }

    return (
        <div className="book-cards">
            <div className="container">
                <h2 className="book-cards-title"></h2>

                <div className="book-cards-grid">
                    {books.length > 0 ? (
                        books.map((book, index) => (
                            <div key={book.ISBN || index} className="book-card">
                                <div className="book-card-image-wrapper">
                                    <img
                                        src={book.image || '/images/placeholder.jpg'}
                                        alt={book.Title || 'Libro'}
                                        className="book-card-image"
                                    />
                                    <div className="book-card-overlay"></div>
                                </div>

                                <div className="book-card-content">
                                    <h4 className="book-card-title">{book.Title}</h4>
                                    <div className="book-card-info">
                                        <p className="book-card-year">Año: {book.Year}</p>
                                        <p className="book-card-publisher">Editorial: {book.Publisher}</p>
                                        <p className="book-card-isbn">ISBN: {book.ISBN}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No hay libros disponibles</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookCards;
