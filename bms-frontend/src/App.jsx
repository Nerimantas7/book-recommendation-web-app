import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListBooksComponent from './components/ListBooksComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookComponent from './components/BookComponent'
import ListCategoriesComponent from './components/ListCategoriesComponent'
import ListCommentsComponent from './components/ListCommentsComponent'
import CategoryComponent from './components/CategoryComponent'
import RegisterComponent from './components/RegisterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* // http://localhost:5173 */}
          <Route path='/' element = {<ListBooksComponent/>}></Route>
          {/* // http://localhost:5173/books */}
          <Route path='/books' element = {<ListBooksComponent/>}></Route>
          {/* // http://localhost:5173/add-book */}
          <Route path='/add-book' element = {<BookComponent/>}></Route>
          {/* // http://localhost:5173/edi-book */}
          <Route path='/edit-book/:id' element = {<BookComponent/>}></Route>

          {/* // http://localhost:5173/categories */}
          <Route path='/categories' element = {<ListCategoriesComponent/>}></Route>
          {/* // http://localhost:5173/add-category */}
          <Route path='/add-category' element = {<CategoryComponent/>}></Route>
          {/* // http://localhost:5173/add-category/1 */}
          <Route path='/edit-category/:id' element = {<CategoryComponent/>}></Route>

          {/* // http://localhost:5173/comments */}
          <Route path='/comments' element = {<ListCommentsComponent/>}></Route>

          {/* // http://localhost:5173/register */}
          <Route path='/register' element={<RegisterComponent/>}></Route>
        </Routes>        
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
