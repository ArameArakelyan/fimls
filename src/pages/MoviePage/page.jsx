import React, { act } from 'react'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'
import useFetch, { api_key, img_url, main_url } from '../../costume hooks/Fetch/useFetch'
import Header from '../../components/Header'


const MoviePage = () => {
  const { id } = useParams()
  const movieurl = main_url + "/movie/" + id + "?" + api_key
  const data = useFetch(movieurl, "GET")

const style = {
 
  backgroundImage:  `url(${img_url + data.backdrop_path})`,
  width: "1280px",
  height:"700px", 
  backgroundPosition: 'center',
  backgroundSize: "cover",
  backgroundRepeat: 'no-repeat'
}
let genre 
   if (data.genres!=undefined) {
       genre = data.genres.map(el => {
         return el.name
     })
     genre = genre.join(", ")   }

   const casturl = main_url + "/movie/" + id + "/credits?" + api_key
    const cast = useFetch(casturl, "GET")
    let acts = []
    if (Object.keys(cast).length !== 0) {
        acts = [...cast.cast]
    }
    
  return (
    <div className='bg-bgColor_1 w-full  flex justify-center items-center flex-col'>
      <div className='' style={style} >
        <div className='back_poster1 relative'>
        <Header/>
        <div className=' w-[90%] flex flex-col  absolute top-[120px] left-[80px]'>
          <div className='ml-[70px] bg-bgColor_1 w-[270px] flex justify-center items-center p-2 border rounded-lg border-bgColor_1 '>
          <img className='' src={img_url+data.poster_path} alt="" />
          </div>
          <div className='w-[390px] mt-[50px]'>
            <p className='text-colorWhite text-[25px] text-center '>{data.title}</p>
            <p className='text-colorWhite text-[20px] text-center'>{genre} | {Math.floor(data.runtime/60)}h{data.runtime%60}m</p>
          </div>
          <div className='flex justify-between px-5 mt-[20px]'>
            <div className='flex'>
            <button className="mr-5 bg-[#FFFFFFE6] pr-[33px] pl-[65px] border-[#FFFFFF33] rounded-[40px] flex justify-center items-center"><p className='text-[#262626] text-xl font-normal'>Watch Now</p></button>
            <button className='border border-solid border-[#FFFFFF33] rounded-[40px] backdrop-blur-2xl bg-[#FFFFFF1A]'><p className= 'py-[15px] px-5 text-colorWhite font-normal text-xl'>Add Watchlist</p></button>
            </div>

          <div className='flex gap-[25px]'>
            <div className='flex justify-center items-center bg-[#FFFFFF1A] border border-solid border-[#FFFFFF33] w-14 h-14 rounded-full'></div>
            <div className='flex justify-center items-center bg-[#FFFFFF1A] border border-solid border-[#FFFFFF33] w-14 h-14 rounded-full'></div>
            <div className='flex justify-center items-center bg-[#FFFFFF1A] border border-solid border-[#FFFFFF33] w-14 h-14 rounded-full'></div>
          </div>
          </div>
        </div>
        </div>
        
      </div>
      <div className='w-[1280px] flex justify-center flex-col items-center'>
        <p className='text-colorWhite text-[18px] w-[1250px] mt-8'>
          {data.overview}
        </p>
        <div className='mt-[50px]'>
          <p className='text-colorWhite text-[25px] mb-4'>Top Cast</p>
          <div className='grid grid-cols-5 gap-y-3 gap-2'>
          {
            acts.map((el,i)=>{
              if (i<10) {
                return(
                  <div className='flex gap-2' key={i}>
                    <img className='w-[80px] ' src={img_url+el.profile_path} alt="" />
                    <div className='text-colorWhite text-center w-full flex justify-center items-center flex-col'>
                      <p className='font-semibold text-[18px]'>{el.name}</p>
                      <p className='text-[#9CA4AB] text-lg font-medium'>{el.character}</p>
                    </div>
                  </div>
                )
              }
            })
          }
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default MoviePage