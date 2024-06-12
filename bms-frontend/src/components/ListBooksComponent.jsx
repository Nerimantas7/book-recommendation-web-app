import React, { useEffect, useState } from 'react'
import { listBooks } from '../services/BookService'
import { useNavigate } from 'react-router-dom'

const ListBooksComponent = () => {

    const [books, setBooks] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        listBooks().then((response) => {
            setBooks(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    function addNewBook() {
        navigator('/add-book')
    }

    return (

        <div className="row row-cols-1 row-cols-md-3 g-1 mx-4 my-3">
            <div>
                <button className='btn btn-secondary mb-2' onClick={addNewBook}>Add Book</button>
            </div>
            
            {books.map(book => (
                <div className="card mb-3 mx-auto" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div class="col-md-4">
                            <img src={book.imagePath} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{book.bookTitle}</h5>
                                <p className="card-text">{book.bookDescription}</p>
                                <p className="card-text">ISBN: {book.codeISBN}</p>
                                <p className="card-text">{book.bookPages} pages</p>
                                <a href="#" className="btn btn-secondary">Write a comment</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

}

export default ListBooksComponent