import React, { useState } from 'react'

const BookComponent = () => {

    const [bookTitle, setBookTitle ] = useState('')
    const [bookDescription, setBookDescription] = useState('')
    const [imagePath, setImagePath] = useState('')
    const [codeISBN, setCodeISBN] =useState('')
    const [bookPages, setBookPages] = useState('')

    function saveBook(e) {
        e.preventDefault();

        const book = { bookTitle, bookDescription, imagePath, codeISBN, bookPages}

        // Add a confirmation dialog
        if (window.confirm('Are you sure you want to save this book?')) {
            console.log(book);
            // Proceed with saving the book 
        } else {
            // If the user clicks "Cancel", do nothing
            console.log('Save operation cancelled');
        }

        console.log(book)
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
                                <label className='form-label'>Book Title:</label>
                                <input
                                    type='text'
                                    placeholder='Enter book title'
                                    name='bookTitle'
                                    value={bookTitle}
                                    className='form-control'
                                    onChange={(e) => setBookTitle(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Book description:</label>
                                <input
                                    type='text'
                                    placeholder='Enter book description'
                                    name='bookDescription'
                                    value={bookDescription}
                                    className='form-control'
                                    onChange={(e) => setBookDescription(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Add image path:</label>
                                <input
                                    type='text'
                                    placeholder='Add image path'
                                    name='imagePath'
                                    value={imagePath}
                                    className='form-control'
                                    onChange={(e) => setImagePath(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Enter book ISBN code:</label>
                                <input
                                    type='number'
                                    placeholder='Enter book ISBN code'
                                    name='codeISBN'
                                    value={codeISBN}
                                    className='form-control'
                                    onChange={(e) => setCodeISBN(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Enter number of pages:</label>
                                <input
                                    type='number'
                                    placeholder='Enter number of pages'
                                    name='bookPages'
                                    value={imagePath}
                                    className='form-control'
                                    onChange={(e) => setBookPages(e.target.value)}
                                >
                                </input>
                            </div>

                            <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BookComponent