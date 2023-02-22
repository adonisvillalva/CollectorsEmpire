import Link from "next/link"
import styles from '@/styles/posts/cards.module.css'
import { getCollectors, fetchPosts } from "@/app/api/apiRest"

const col = getCollectors();
export async function Cards(){
    const posts = await fetchPosts();
    return(
        <div className={styles.container}>
            {posts.slice(0,4).map(post =>(
                <article key={post.nid} className={styles.card}>
                    <Link href='/posts/[id]' as={`/posts/${post.title}`} className={styles.test}>
                        <h3>{post.title}</h3>
                        <p>{post.summary}</p>
                        <img src={col + post.image} alt={post.title} />
                    </Link>
                </article>
            ))}
        </div>
    )
}