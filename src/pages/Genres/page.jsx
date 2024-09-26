import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import useFetch, { api_key, main_url } from '../../costume hooks/Fetch/useFetch'
import { useParams } from 'react-router-dom'
import Box from '../../components/Box'

const Genres = () => {
  const { id } = useParams()
  const data = useFetch(main_url + "/discover/movie?" + api_key + `&with_genres=${id}`, "GET")
    let movies = []
    if (Object.keys(data).length !== 0) {
        movies = [...data.results]
    }
  return (
    <div className='bg-bgColor_1 w-full flex justify-center items-center flex-col'>
      <Header/>
      <div className='grid grid-cols-5'>
      {movies.map((el,i)=>{
        return(
          <Box key={i} movie={el}/>
        )
      })}
      </div>
      <Footer/>
    </div>
  )
}

export default Genres