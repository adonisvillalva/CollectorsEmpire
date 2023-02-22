import {Cards} from '@/app/posts/Cards'
import styles from '@/styles/home.module.css'
export default function NewPosts(){
    return(
        <section className={styles.posts}>
            <h2>Nuevos Artículos</h2>
            <Cards/>
        </section>
    )
  }