import Layout from './pages/Layout'

import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ProductPage from './pages/ProductPage'
import { useState } from 'react'


function App() {
  const [cartProducts, setCartProducts] = useState([]); //a,b,c

  const updateCart = (productToAdd) => {
    setCartProducts([...cartProducts, productToAdd]) //a,b,c,d
  }

  const removeItem = (productToRemove) => { //[a,b,c,cd] productRemove = c
    setCartProducts( cartProducts.filter(item != productToRemove)) // a,b,c
  }
  

  return (
    <>
      <Routes>
        <Route element={<Layout cartItems={cartProducts}/>}>
        <Route path="/" element={<Home  addproduct={updateCart}/>} />
        <Route path="/about" element={<About title="Hello "/>} />

        <Route path="/women" element={<ProductPage key="women" title="women" addproduct={updateCart} />}/>
        <Route path="/men" element={<ProductPage  key="men" title="men" addproduct={updateCart} />} />
        <Route path="/kid" element={<ProductPage key="kid" title="kid" addproduct={updateCart} />}/>
        <Route path="/accessories" element={<ProductPage key="accessories" title="accessories" addproduct={updateCart} />}/>
        <Route path="/cosmetics" element={<ProductPage key="cosmetics" title="cosmetics" addproduct={updateCart}  />}/>
        </Route>
      </Routes>
     
     
      

    </>
  )
}

export default App
