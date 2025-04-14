import { getImageUrl } from "../../utils/function"
import { getRandomImage } from "../../data"
import styles from './cartItem.module.css'

const CartItem = ({product}) => {
  return (
    <div className={styles.product}>
      <img className= {styles.productImage} src={getImageUrl(getRandomImage())} />
      <div className={styles.productDetails}>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
    </div>
  )
}

export default CartItem
