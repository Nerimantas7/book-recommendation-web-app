import React from 'react'
import {isAdminUser} from '../services/AuthService'

const isAdmin = isAdminUser();

const FooterComponent = () => {
    return (
        <div>
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                    {
                        isAdmin &&
                        <li className="nav-item"><a href="/add-book" className="nav-link px-2 text-muted">Add new book</a></li>
                    }                    
                    <li className="nav-item"><a href="/categories" className="nav-link px-2 text-muted">Categories</a></li>
                    <li className="nav-item"><a href="/comments" className="nav-link px-2 text-muted">Comments</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                </ul>
                <p className="text-center text-muted">© 2024 by Nerimantas</p>
            </footer>
        </div>
    )
}

export default FooterComponent