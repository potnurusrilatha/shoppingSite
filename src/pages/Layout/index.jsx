import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet /> 
    
    {/* it will change based on what router path is in the browser */}
    
    </>
        
   
  )
}

export default Layout
