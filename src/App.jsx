import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Basket from './pages/Basket'
import Wishlist from './pages/Wishlist'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="basket" element={<Basket />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
