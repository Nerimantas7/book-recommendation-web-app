import React, { useEffect, useState } from 'react';
import { deleteBook, listBooks } from '../services/BookService';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';
import { isUserLoggedIn } from '../services/AuthService'

const ListBooksComponent = () => {
    const [books, setBooks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const navigator = useNavigate();

    const isAuth = isUserLoggedIn();

    useEffect(() => {
        getAllBooks()
    }, []);

    function getAllBooks() {
        listBooks()
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleShowModal = (book) => {
        setSelectedBook(book);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedBook(null);
    };

    // const addNewBook = () => {
    //     navigator('/add-book');
    // };

    const updateBook = (id) => {
        navigator(`/edit-book/${id}`);
    };

    function removeBook(id) {
        console.log(id);
        if (window.confirm('Are yo sure you want to delete this book?')) {
            deleteBook(id).then((response) => {
                getAllBooks();
            }).catch(error => {
                console.error(error);
            });
        } else {
            console.log('Delete aperation cancelled')
        }
    }

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
                                    <button className="btn btn-secondary" onClick={() => handleShowModal(book)}>Write a comment</button>
                                    <button className="btn btn-outline-secondary mx-3" onClick={() => handleShowModal(book)}>Read comments</button>
                                </div>

                                {
                                    isAuth &&
                                    <div className="card-footer">
                                        <button type="button" className="btn btn-outline-secondary" onClick={() => updateBook(book.id)}>Update</button>
                                        <button type="button" className="btn btn-outline-secondary mx-3" onClick={() => removeBook(book.id)}>Delete</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && selectedBook && (
                <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
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
