import Header from './components/Header'
import CategoryTile from './components/CategoryTile'
import styles from './components/CategoryTile/category-tile.module.css'
import { categoryInfo, newProducts } from './data.js'
import Product from './components/Product'

function App() {
  return (
    <>
      <Header />
      <div className={styles.categoryTileContainer}>
        {categoryInfo && categoryInfo.map((item, index) => (
          <CategoryTile key={index} {...item} />)
        )}
      </div>
      <div>
        <h3>NewProducts</h3>
        
        {newProducts.map((item, index) => <Product item={item} key={index} />)} 
      
      </div>

    </>
  )
}

export default App
