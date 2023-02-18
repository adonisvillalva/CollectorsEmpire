import { fetchSinglePost } from "@/app/api/apiRest";
export default async function Post({params}){
    const {id} = params;
    const post = await fetchSinglePost(id);
    return(
        <>
            {post.map(post => (
                <article key={post.nid}>
                    <h2>{post.title}</h2>
                    <div dangerouslySetInnerHTML={{__html: post.body}}></div>
                </article>        
            ))}
        </>
        
    )
}