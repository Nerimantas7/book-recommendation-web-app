import React from 'react'

const HeaderComponent = () => {

    // function addNewBook() {
    //     navigator('/add-book')
    // }

    return (
        <div>
            <header className='header'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Book Management System</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/add-book">Add new book</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/categories">Categories</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/comments">Comments</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <a className='btn btn-outline-dark me-md-2' href="/register">Register</a>
                    </div>

                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                            <form className="d-flex">

                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent