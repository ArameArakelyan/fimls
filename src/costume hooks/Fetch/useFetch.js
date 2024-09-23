import { useEffect, useState } from "react";


export let ganre = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];

export const api_key = "api_key=9b702a6b89b0278738dab62417267c49";
export const main_url = "https://api.themoviedb.org/3";
export const api_url = main_url + "/discover/movie?sort_by=popularity.desc&" + api_key;
export const img_url = "https://image.tmdb.org/t/p/w500";
export const searchUrl = main_url + "/search/movie?" + api_key;

function useFetch(url_fetch, method_fetch) {
    const [data, setData] = useState({})
    useEffect(()=>{
        async function fetching(url, method) {
            try {
                const response = await fetch(url, { method });
                const json = await response.json();
                setData(json)
            } catch (error) {
                return console.error("Error:", error);
            }
        }
        fetching(url_fetch, method_fetch)
    },[url_fetch, method_fetch])
    return data
}

export default useFetch
