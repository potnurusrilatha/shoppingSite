
import { getImageUrl } from '../../utils/function'
import styles from './product.module.css'
import { getRandomImage } from '../../data'

const Product = ({item, buyItem})=> {

  const handleClick = (item) => {
    buyItem(item)
  }

  
  return (
    <div className={styles.product}>
        <img className={styles.productImage} src={getImageUrl(getRandomImage())} />
      <h4 className={styles.productName}>{item.name}</h4>
      <p className={styles.productPrice}>{item.price}</p>
      <button className={styles.addToCart} onClick={handleClick}>ADD TO CART</button>
    </div>
  )
}

export default Product
