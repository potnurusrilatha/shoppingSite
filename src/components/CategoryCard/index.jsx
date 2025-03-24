import styles from './categoryCard.module.css'

const CategoryCard = ({title, items}) => {
  return (
    <div className={styles.categoryContainer}>
    <div className={styles.categoryimage}>
      <div className={styles.categorytext}>
        <h1> {title}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, obcaecati beatae consequuntur iusto amet animi, harum est iste minima voluptatum sed adipisci quidem atque repellendus impedit nisi? Eveniet, minus maxime.</p>
        <a href="#">Shop now</a>
        </div>
      
    </div>
    </div>
  )
}

export default CategoryCard
