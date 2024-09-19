import { useEffect } from "react";

export const api_key = "api_key=9b702a6b89b0278738dab62417267c49";
export const main_url = "https://api.themoviedb.org/3";
export const api_url = main_url + "/discover/movie?sort_by=popularity.desc&" + api_key;
export const img_url = "https://image.tmdb.org/t/p/w500";
export const searchUrl = main_url + "/search/movie?" + api_key;

function useFetch(getUrl, getMethod) {
    const [data, setData] = useState({})
    useEffect(()=>{
        async function fetching(url, method) {
            try {
                const res = await fetch(url, {method})
                const json = res.json()
                setData(json)
            } catch (error) {
                return console.error("Error:", error);
                
            }
        }
        fetching(getUrl, getMethod)
    },[getUrl,getMethod])
    return data
}

export default useFetch