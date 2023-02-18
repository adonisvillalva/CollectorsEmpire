import Link from "next/link"
import { getCollectors, fetchPosts } from "../api/apiRest"

const col = getCollectors();

export async function ListOfPosts(){
    const posts = await fetchPosts()
    return(
        <>
            {posts.map(post =>(
                <article key={post.id}>
                    <Link href='/posts/[id]' as={`/posts/${post.title}`}>
                        <h2>{post.title}</h2>
                        <p>{post.summary}</p>
                        <img src={col + post.image} alt={post.title} />
                    </Link>
                </article>
            ))}
        </>
    )
}