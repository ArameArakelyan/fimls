import React from 'react'
import { img_url } from '../../costume hooks/Fetch/useFetch'

const FilmLine = ({films}) => {
  return (
    <div className='flex mt-5 ml-5 gap-4'>
        {films.map((el,i)=>{
            if (i>5 && i<=10) {
                return(
                    <img key={i} className='w-[230px]  border border-solid rounded-xl border-[#FFFFFF33]' src={img_url + el.poster_path} alt="" />
                )
            }
        })}
    </div>
  )
}

export default FilmLine