import styles from './productPage.module.css'

const ProductPage = ({title,categoryProducts}) => {
  return (
    <>
    <h1 className={styles.pageTitle}>
        {title}
      
    </h1>
    <div className={styles.productContainer}></div>
    {/* {categories && categoryProducts.map((item, index) => <Product key={index} item={}/>} */}
    </>
  )
}

export default ProductPage
