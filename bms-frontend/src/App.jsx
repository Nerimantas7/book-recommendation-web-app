import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListBooksComponent from './components/ListBooksComponent'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import BookComponent from './components/BookComponent'
import ListCategoriesComponent from './components/ListCategoriesComponent'
import ListCommentsComponent from './components/ListCommentsComponent'
import CategoryComponent from './components/CategoryComponent'
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'
import { isUserLoggedIn } from './services/AuthService'

function App() {

  function AuthenticatedRoute({ children }) {

    const isAuth = isUserLoggedIn();

    if (isAuth) {
      return children;
    }

    return <Navigate to="/" />
  }

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* // http://localhost:5173 */}
          <Route path='/' element={<ListBooksComponent />}></Route>
          {/* // http://localhost:5173/books */}
          <Route path='/books' element={<ListBooksComponent />}></Route>
          {/* // http://localhost:5173/add-book */}
          <Route path='/add-book' element={
            <AuthenticatedRoute>
              <BookComponent />
            </AuthenticatedRoute>
          }></Route>
          {/* // http://localhost:5173/edi-book */}
          <Route path='/edit-book/:id' element={<BookComponent />}></Route>

          {/* // http://localhost:5173/categories */}
          <Route path='/categories' element={
            <AuthenticatedRoute>
              <ListCategoriesComponent />
            </AuthenticatedRoute>
          }></Route>
          {/* // http://localhost:5173/add-category */}
          <Route path='/add-category' element={
            <AuthenticatedRoute>
              <CategoryComponent />
            </AuthenticatedRoute>
          }></Route>
          {/* // http://localhost:5173/add-category/1 */}
          <Route path='/edit-category/:id' element={
            <AuthenticatedRoute>
              <CategoryComponent />
            </AuthenticatedRoute>
          }></Route>

          {/* // http://localhost:5173/comments */}
          <Route path='/comments' element={<ListCommentsComponent />}></Route>

          {/* // http://localhost:5173/register */}
          <Route path='/register' element={<RegisterComponent />}></Route>

          {/* // http://localhost:5173/login */}
          <Route path='/login' element={<LoginComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
