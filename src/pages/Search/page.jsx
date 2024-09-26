import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch, { api_key, main_url } from '../../costume hooks/Fetch/useFetch'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Box from '../../components/Box'

const SearchPage = () => {
  const { searchtext } = useParams()
  const searchurl = main_url + "/search/movie?" + api_key + "&query=" + searchtext
  const data = useFetch(searchurl, "GET")
  let movies = []
  if (Object.keys(data).length !== 0) {
    movies = [...data.results]
  }

  return (
    <div className="movie-cont">
      <Header />
      <div className='grid grid-cols-5'>
      {movies.map((movie) => {
        return (<Box key={movie.id} movie={movie} />)
      })}
      </div>
      <Footer />
    </div>
  )
}

export default SearchPage