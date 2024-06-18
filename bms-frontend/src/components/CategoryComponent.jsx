import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { createCategory, getCategoryById, updateCategory } from '../services/CategoryService';

const CategoryComponent = () => {

    const navigator = useNavigate();

    const { id } = useParams();

    const [bookCategory, setBookCategory] = useState('')
    const [categoryDescription, setCategoryDescription] = useState('')

    useEffect(() => {

        getCategoryById(id).then((response) => {
            setBookCategory(response.data.bookCategory);
            setCategoryDescription(response.data.categoryDescription);
        }).catch(error => {
            console.error(error);
        })
    }, [id])

    function saveOrUpdateCategory(e) {
        e.preventDefault();

        const category = { bookCategory, categoryDescription }

        console.log(category);

        if (id) {
            updateCategory(id, category).then((response) => {
                console.log(response.data);
                navigator('/categories');
            }).catch(error => {
                console.error(error);
            })
        } else {
            createCategory(category).then((response) => {
                console.log(response.data);
                navigator('/categories');
            }).catch(error => {
                console.error(error);
            })
        }
    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center pt-2'>Update Category</h2>
        } else {
            return <h2 className='text-center pt-2'>Add Category</h2>
        }
    }

    const handleCancel = () => {
        navigator('/');
    };

    return (
        <div className='container my-4'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Category Name:</label>
                                <input
                                    type='text'
                                    name='bookCategory'
                                    placeholder='Enter Category Name'
                                    value={bookCategory}
                                    onChange={(e) => setBookCategory(e.target.value)}
                                    className='form-control'
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Category Description:</label>
                                <input
                                    type='text'
                                    name='categoryDescription'
                                    placeholder='Enter Category Description'
                                    value={categoryDescription}
                                    onChange={(e) => setCategoryDescription(e.target.value)}
                                    className='form-control'
                                >
                                </input>
                            </div>

                            <button className='btn btn-secondary' onClick={(e) => saveOrUpdateCategory(e)}>Submit</button>
                            <button className='btn btn-secondary mx-3' onClick={handleCancel}>Cancel</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryComponent