const Collectors_URL = 'https://api.collectors-empire.com/';

export function getCollectors(){
    return Collectors_URL;
}  
export function fetchPosts(){
    return fetch(Collectors_URL + 'collectors?_format=json',{
        next: {
            revalidate: 60
        }
    })
    .then(res => res.json())
}
export function fetchSinglePost(id){
    return fetch(`${Collectors_URL}collectors/${id}?_format=json`,{
        next: {
            revalidate: 60
        }
    })
    .then(res => res.json())
}