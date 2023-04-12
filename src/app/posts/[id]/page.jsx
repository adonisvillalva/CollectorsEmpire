import { fetchSinglePost } from "@/app/api/apiRest";
import styles from '@/styles/posts/post.module.scss'
export default async function Post({params}){
    const {id} = params;
    const post = await fetchSinglePost(id);
    return(
        <>
            {post.map(post => (
                <article key={post.nid} className={styles.post}>
                    <h2 className={styles.title}>{post.title}</h2>
                    <div dangerouslySetInnerHTML={{__html: post.body}}></div>
                </article>        
            ))}
        </>
    )
}