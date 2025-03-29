import Product from '../../components/Product'

import CategoryTile from '../../components/CategoryTile'
import styles from '../../components/CategoryTile/category-tile.module.css'
import { categoryInfo, newProducts } from '../../data.js'

const Home = () => {
  return (
    <>
    <div className={styles.categoryTileContainer}>
        {categoryInfo && categoryInfo.map((item, index) => (
          <CategoryTile key={index} {...item} />)
        )}
      </div>

       <div className="new-products">
      <h3 className="new-products__title">NewProducts</h3>
      
      {newProducts.map((item, index) => <Product item={item} key={index} />)} 
    
     </div>
    </>
    
  )
}

export default Home
