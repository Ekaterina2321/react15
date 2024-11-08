import './App.css'
import { Banner } from "./components/Banner/Banner"

import { Header } from "./components/Header/Header"
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { CatalogPage } from './pages/CatalogPage/CatalogPage'
import { ProductPage } from './pages/ProductPage/ProductPage'
import { UsersPage } from './pages/UsersPage/UsersPage'
import { CartPage } from './pages/CartPage/CartPage'
import {useState} from 'react'

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Header cart={cart} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage cart={cart} addToCart={setCart} />} />
        <Route path='/catalog/:id' element={<ProductPage />}/>
        <Route path='/users' element={<UsersPage/>}/>
        <Route path='/cart' element={<CartPage cart={cart}/>}/>
      </Routes>
    </>
  )
}

export default App

