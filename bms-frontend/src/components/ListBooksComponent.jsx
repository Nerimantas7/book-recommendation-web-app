import React, { useEffect, useState } from 'react';
import { listBooks } from '../services/BookService';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const ListBooksComponent = () => {
    const [books, setBooks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        listBooks()
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleShowModal = (book) => {
        setSelectedBook(book);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedBook(null);
    };

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-1 mx-4 my-3">
                {books.map((book) => (
                    <div key={book.id} className="card mb-3 mx-auto" style={{ maxWidth: '540px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={book.imagePath} className="img-fluid rounded-start" alt={book.bookTitle} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{book.bookTitle}</h5>
                                    <p className="card-text">{book.bookDescription}</p>
                                    <p className="card-text">ISBN: {book.codeISBN}</p>
                                    <p className="card-text">{book.bookPages} pages</p>
                                    <button className="btn btn-secondary" onClick={() => handleShowModal(book)}>Write a comment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && selectedBook && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Comment on {selectedBook.bookTitle}</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="comment" className="form-label">Your Comment</label>
                                        <textarea id="comment" className="form-control" rows="3"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-secondary">Save</button>
                                    <button type="button" className="btn btn-light mx-3" onClick={handleCloseModal}>Close</button>
                                </form>
                            </div>                            
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListBooksComponent;
