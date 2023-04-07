const Collectors_URL = 'https://api.collectors-empire.com/';

export function getCollectors(){
    return Collectors_URL;
}  
export function fetchPosts(){
    return fetch(Collectors_URL + 'blog?_format=json',{
        next: {
            revalidate: 60
        }
    })
    .then(res => res.json())
}
export function fetchSinglePost(id){
    return fetch(`${Collectors_URL}blog/${id}?_format=json`,{
        next: {
            revalidate: 60
        }
    })
    .then(res => res.json())
}