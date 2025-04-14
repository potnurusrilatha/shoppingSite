import styles from './header.module.css'
import Logo from '../Logo'
import DesktopNavigation from '../Navigation/DesktopNavigation'
import MobileNavigation from '../Navigation/MobileNavigation'
import Search from '../Search'
import Cart from '../Cart'



const Header = ({ productsInCart}) => {
  return (
    <header className={styles.header}>
      <MobileNavigation />
        <Logo />
        <DesktopNavigation />
         {/* <div>{pages.map((item)=> <p>{item}</p>)}</div> */}
        <div className={styles.iconContainer}>
          <Search />
          <Cart  cartItems={productsInCart}/>
          {productsInCart.length !== 0 && <span>{productsInCart.length}</span>}
        </div>
      
    </header>
  )
}

export default Header
