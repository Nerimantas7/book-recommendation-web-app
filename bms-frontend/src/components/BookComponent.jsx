import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createBook, getBook, updateBook } from '../services/BookService'; // Add necessary imports
import { getAllCategories } from '../services/CategoryService';

const BookComponent = () => {

    const [bookTitle, setBookTitle] = useState('');
    const [bookDescription, setBookDescription] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [codeISBN, setCodeISBN] = useState('');
    const [bookPages, setBookPages] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [categories, setCategories] = useState([]);

    const { id } = useParams();

    // Initialize state variables to hold validation errors
    const [errors, setErrors] = useState({
        bookTitle: '',
        bookDescription: '',
        imagePath: '',
        codeISBN: '',
        bookPages: '',
        bookCategory: ''
    });

    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getBook(id).then((response) => {
                setBookTitle(response.data.bookTitle);
                setBookDescription(response.data.bookDescription);
                setImagePath(response.data.imagePath);
                setCodeISBN(response.data.codeISBN);
                setBookPages(response.data.bookPages);
                setCategoryId(response.data.categoryId);
            }).catch(error => {
                console.error(error);
            });
        }

        getAllCategories().then((response) => {
            setCategories(response.data);
        }).catch(error => {
            console.error(error);
        });

    }, [id]);

    // Function to save added or updated data from form
    function saveOrUpdateBook(e) {
        e.preventDefault();

        if (validateForm()) { // Add form validation check
            const book = { bookTitle, bookDescription, imagePath, codeISBN, bookPages, categoryId };

            if (id) {
                // Add a confirmation dialog
                if (window.confirm('Are you sure you want to update this book?')) {
                    console.log(book);

                    updateBook(id, book).then((response) => {
                        console.log(response.data);
                        navigator('/books');
                    }).catch(error => {
                        console.error(error);
                    });
                } else {
                    console.log('Update operation cancelled');
                }
            } else {
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
                    console.log('Save operation cancelled');
                }
            }
        }
    }

    // Function to check the form data
    function validateForm() {
        let valid = true;

        // Use spread operator(...) to copy object into another object
        const errorsCopy = { ...errors };

        if (bookTitle.trim()) {
            errorsCopy.bookTitle = '';
        } else {
            errorsCopy.bookTitle = 'Book title is required';
            valid = false;
        }

        if (bookDescription.trim()) {
            errorsCopy.bookDescription = '';
        } else {
            errorsCopy.bookDescription = 'Book description is required';
            valid = false;
        }

        if (imagePath.trim()) {
            errorsCopy.imagePath = '';
        } else {
            errorsCopy.imagePath = 'Image path is required';
            valid = false;
        }

        if (codeISBN && !isNaN(codeISBN)) {
            errorsCopy.codeISBN = '';
        } else {
            errorsCopy.codeISBN = 'ISBN code is required';
            valid = false;
        }

        if (bookPages && !isNaN(bookPages)) {
            errorsCopy.bookPages = '';
        } else {
            errorsCopy.bookPages = 'Number of pages is required and must be a number';
            valid = false;
        }

        if (categoryId) {
            errorsCopy.bookCategory = '';
        } else {
            errorsCopy.bookCategory = 'Select category';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    const handleCancel = () => {
        navigator('/');
    };

    function pageTitle() {
        if (id) {
            return <h3 className='text-center'>Update Book</h3>;
        } else {
            return <h3 className='text-center'>Add Book</h3>;
        }
    }

    return (
        <div className='container'>
            <div className='row'>S
                <div className='card col-md-6 offset-md-3 offset-md-3 mt-4'>
                    {pageTitle()}
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
                                />
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
                                />
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
                                />
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
                                />
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
                                />
                                {errors.bookPages && <div className='invalid-feedback'>{errors.bookPages}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Category:</label>
                                <select
                                    className={`form-control ${errors.bookCategory ? 'is-invalid' : ''}`}
                                    value={categoryId}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                >
                                    <option value="Select category">Select category</option>
                                    {
                                        categories.map(category =>
                                            <option key={category.id} value={category.id}>{category.bookCategory}</option>
                                        )
                                    }

                                </select>
                                {errors.bookCategory && <div className='invalid-feedback'>{errors.bookCategory}</div>}
                            </div>

                            <button className='btn btn-secondary' onClick={saveOrUpdateBook}>Submit</button>
                            <button className='btn btn-secondary mx-3' onClick={handleCancel}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookComponent;
