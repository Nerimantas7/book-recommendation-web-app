import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createBook } from '../services/BookService'

const BookComponent = () => {

    const [bookTitle, setBookTitle] = useState('')
    const [bookDescription, setBookDescription] = useState('')
    const [imagePath, setImagePath] = useState('')
    const [codeISBN, setCodeISBN] = useState('')
    const [bookPages, setBookPages] = useState('')

    // Initialize state variables to hold validation errors
    const [errors, setErrors] = useState({
        bookTitle: '',
        bookDescription: '',
        imagePath: '',
        codeISBN: '',
        bookPages: ''
    })

    const navigator = useNavigate();

    function saveBook(e) {
        e.preventDefault();

        if (validateForm()) {

            const book = { bookTitle, bookDescription, imagePath, codeISBN, bookPages }

            // Add a confirmation dialog
            if (window.confirm('Are you sure you want to save this book?')) {
                console.log(book);
                createBook(book).then((response) => {
                    console.log(response.data);
                    navigator('/books');
                }).catch(error => {
                    console.error(error);
                });
            } else {
                // If the user clicks "Cancel", do nothing
                console.log('Save operation cancelled');
            }

            console.log(book)

            createBook(book).then((response) => {
                console.log(response.data);
                navigator('/books')
            })
        }
    }

    //Function to check the form data
    function validateForm() {
        let valid = true;

        //we use spread operator(...) to copy object into another object
        const errorsCopy = { ...errors }

        if (bookTitle.trim()) {
            errorsCopy.bookTitle = '';
        } else {
            errorsCopy.bookTitle = 'Book title is required';
            valid = false
        }

        if (bookDescription.trim()) {
            errorsCopy.bookDescription = '';
        } else {
            errorsCopy.bookDescription = 'Book description is required';
            valid = false
        }

        if (imagePath.trim()) {
            errorsCopy.imagePath = '';
        } else {
            errorsCopy.imagePath = 'Image path is required';
            valid = false
        }

        if (codeISBN.trim()) {
            errorsCopy.codeISBN = '';
        } else {
            errorsCopy.codeISBN = 'ISBN code is required';
            valid = false
        }

        if (bookPages.trim()) {
            errorsCopy.bookPages = '';
        } else {
            errorsCopy.bookPages = 'Number of pages is required';
            valid = false
        }

        setErrors(errorsCopy);

        return valid;
    }

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Add Book</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Book title:</label>
                                <input
                                    type='text'
                                    placeholder='Enter book title'
                                    name='bookTitle'
                                    value={bookTitle}
                                    className={`form-control ${errors.bookTitle ? 'is-invalid' : ''}`}
                                    onChange={(e) => setBookTitle(e.target.value)}
                                >
                                </input>
                                {errors.bookTitle && <div className='invalid-feedback'>{errors.bookTitle}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Book description:</label>
                                <input
                                    type='text'
                                    placeholder='Enter book description'
                                    name='bookDescription'
                                    value={bookDescription}
                                    className={`form-control ${errors.bookDescription ? 'is-invalid' : ''}`}
                                    onChange={(e) => setBookDescription(e.target.value)}
                                >
                                </input>
                                {errors.bookDescription && <div className='invalid-feedback'>{errors.bookDescription}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Add image path:</label>
                                <input
                                    type='text'
                                    placeholder='Add image path'
                                    name='imagePath'
                                    value={imagePath}
                                    className={`form-control ${errors.imagePath ? 'is-invalid' : ''}`}
                                    onChange={(e) => setImagePath(e.target.value)}
                                >
                                </input>
                                {errors.imagePath && <div className='invalid-feedback'>{errors.imagePath}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Enter book ISBN code:</label>
                                <input
                                    type='number'
                                    placeholder='Enter book ISBN code'
                                    name='codeISBN'
                                    value={codeISBN}
                                    className={`form-control ${errors.codeISBN ? 'is-invalid' : ''}`}
                                    onChange={(e) => setCodeISBN(e.target.value)}
                                >
                                </input>
                                {errors.codeISBN && <div className='invalid-feedback'>{errors.codeISBN}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Number of pages:</label>
                                <input
                                    type='number'
                                    placeholder='Enter number of pages'
                                    name='bookPages'
                                    value={bookPages}
                                    className={`form-control ${errors.bookPages ? 'is-invalid' : ''}`}
                                    onChange={(e) => setBookPages(e.target.value)}
                                >
                                </input>
                                {errors.bookPages && <div className='invalid-feedback'>{errors.bookPages}</div>}
                            </div>

                            <button className='btn btn-secondary' onClick={saveBook}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookComponent