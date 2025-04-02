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


        <Route path="/women" element={<ProductPage key="women" title="women"  />}/>
        <Route path="/men" element={<ProductPage  key="men" title="men" />} />
        <Route path="/kid" element={<ProductPage key="kid" title="kid" />}/>
        <Route path="/accessories" element={<ProductPage key="accessories" title="accessories"  />}/>
        <Route path="/cosmetics" element={<ProductPage key="cosmetics" title="cosmetics"  />}/>
        </Route>
      </Routes>
     
     
      

    </>
  )
}

export default App
