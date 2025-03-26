
import { getImageUrl } from '../../utils/function'
import styles from './Product.module.css'
import { getRandomImage } from '../../data'

const Product = (item) => {
  return (
    <div className={styles.Product}>
        <img className={styles.productImage} src={getImageUrl(getRandomImage())} />
      <h4 className={styles.productName}>{item.name}</h4>
      <p className={styles.productPrice}>{item.price}</p>
    </div>
  )
}

export default Product
