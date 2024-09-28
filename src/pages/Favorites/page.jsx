import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useSelector } from 'react-redux'
import Box from '../../components/Box'

const Favorites = () => {
    const list = useSelector((state)=>state)
    
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Header />
    
      <div className='grid grid-cols-5 gap-4'>
      {list.map((movie) => {
        return (<Box key={movie.id} movie={movie} />)
      })}
      
      </div>
      <Footer />
    </div>
  )
}

export default Favorites