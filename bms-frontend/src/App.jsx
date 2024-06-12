import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListBooksComponent from './components/ListBooksComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element = {<ListBooksComponent/>}></Route>

        </Routes>        
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
