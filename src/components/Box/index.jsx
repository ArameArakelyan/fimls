import React from 'react'
import { Link } from 'react-router-dom'
import { img_url } from '../../costume hooks/Fetch/useFetch'

const Box = ({movie}) => {
  return (
    <Link to={`/movie/${movie.id}`}>
    <div>
        <img className='w-[230px]  border border-solid rounded-xl border-[#FFFFFF33]' src={img_url + movie.poster_path} alt="" />
    </div>
    </Link>
  )
}

export default Box