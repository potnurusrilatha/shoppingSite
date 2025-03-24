import styles from './header.module.css'
import Logo from '../Logo'
import DesktopNavigation from '../Navigation/DesktopNavigation'
import MobileNavigation from '../Navigation/MobileNavigation'
import Search from '../Search'
import Cart from '../Cart'
// import { pages } from '../../data'



const Header = () => {
  return (
    <header className={styles.header}>
      <MobileNavigation />
        <Logo />
        <DesktopNavigation />
         {/* <div>{pages.map((item)=> <p>{item}</p>)}</div> */}
        <div className={styles.iconContainer}>
          <Search />
          <Cart />
        </div>
      
    </header>
  )
}

export default Header
