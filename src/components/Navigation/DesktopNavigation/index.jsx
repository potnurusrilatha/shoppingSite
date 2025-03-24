import { pages } from '../../../menu.js'
import styles from '../navigation.module.css'
import NavigationItem from '../NavigationItem'

const DesktopNavigation = () => {
   return (
    <div className={styles.desktopMenu}>
        {pages.map((item, index) =>  <p key={index} > {item}</p> )}
    </div>
   )
}

export default DesktopNavigation