import Layout from './pages/Layout'

import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
 import About from './pages/About'
import ProductPage from './pages/ProductPage'


function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About title="Hello "/>} />
        <Route path="/women" element={<ProductPage title="Hello women "/>} />
        <Route path="/men" element={<ProductPage title="Hello men "/>} />
        <Route path="/kid" element={<ProductPage title="Hello kid "/>} />
        </Route>
      </Routes>
     
     
      

    </>
  )
}

export default App
