import React from 'react'
import { img_url } from '../../costume hooks/Fetch/useFetch'
import Box from '../Box'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const FilmLine = ({films}) => {
  return (
    
        <Swiper
            spaceBetween={0}
            slidesPerView={5.1}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          >

            {films.map((el, i) => {
              if (i<10) {
                return (
                  <SwiperSlide key={i}>
                    <Box movie={el}/>
                  </SwiperSlide>
                )
              }
            })}
          </Swiper>
   // </div>
  )
}

export default FilmLine