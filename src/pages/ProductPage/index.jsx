import {useState, useEffect} from 'react'
import Product from '../../components/Product'
import styles from './productPage.module.css'
import { getProductsFromCategory } from '../../data'


const ProductPage = ({ title }) => {
    const[categoryProducts, setCategoryProducts] = useState(null)


    useEffect(()=> {
        setCategoryProducts(getProductsFromCategory(title))
    }, [])


    return (
        <>
        <h1 className={styles.pageTitle}>
            {title}
        </h1>
        <div className={styles.productsContainer}>
            {categoryProducts && categoryProducts.map((item, index) =>  <Product key={index} item={item} />)}      
        </div>
        </>  
    )
}


export default ProductPage