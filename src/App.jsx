import Layout from './pages/Layout'

import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
 import About from './pages/About'


function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About title="Hello "/>} />
        </Route>
      </Routes>
     
     
      

    </>
  )
}

export default App
