import Link from "next/link"
import styles from '@/styles/home/categories.module.scss'
export default function NewPosts(){
    return(
        <section className={styles.categories}>
            <h2>Categorías</h2>
            <nav>
                <ul>
                    <li>
                        <Link href="/" className={styles.btn_categories}>test
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
  }