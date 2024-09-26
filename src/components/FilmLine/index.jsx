import React from 'react'
import { img_url } from '../../costume hooks/Fetch/useFetch'
import Box from '../Box'

const FilmLine = ({films}) => {
  return (
    <div className='flex mt-5 ml-5 gap-4'>
        {films.map((el,i)=>{
            if (i>5 && i<=10) {
                return(
                    <Box key={i} movie={el}/>
                )
            }
        })}
    </div>
  )
}

export default FilmLine