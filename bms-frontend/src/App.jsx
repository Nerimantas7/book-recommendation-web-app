import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListBooksComponent from './components/ListBooksComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookComponent from './components/BookComponent'

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
        </Routes>        
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
