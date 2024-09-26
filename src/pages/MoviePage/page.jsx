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
    console.log(acts);
    
  return (
    <div className='bg-bgColor_1 w-full flex justify-center items-center flex-col'>
      <div className='' style={style} >
        <div className='back_poster1'>
        <Header/>
        <div className='flex flex-col mt-[90px] absolute top-[20px] left-[150px]'>
          <div className='ml-[70px] bg-bgColor_1 w-[270px] flex justify-center items-center p-2 border rounded-lg border-bgColor_1 '>
          <img className='' src={img_url+data.poster_path} alt="" />
          </div>
          <div className='w-[390px] mt-[50px]'>
            <p className='text-colorWhite text-[25px] text-center '>{data.title}</p>
            <p className='text-colorWhite text-[20px] text-center'>{genre} | {Math.floor(data.runtime/60)}h{data.runtime%60}m</p>
          </div>
          <div className='flex justify-between px-5 mt-[20px]'>
          <button className="mr-5 h-[54px] bg-[#FFFFFFE6] py-[15px] pr-[33px] pl-[65px] border-[#FFFFFF33] rounded-[40px] flex"><ion-icon name="play-circle"></ion-icon><p>Watch Now</p></button>
          <div className='flex gap-[25px]'>
            <div className='flex justify-center items-center bg-[#FFFFFF1A] border border-solid border-[#FFFFFF33] w-14 h-14 rounded-full'><ion-icon name="heart-empty"></ion-icon></div>
            <div className='flex justify-center items-center bg-[#FFFFFF1A] border border-solid border-[#FFFFFF33] w-14 h-14 rounded-full'><ion-icon name="download"></ion-icon></div>
            <div className='flex justify-center items-center bg-[#FFFFFF1A] border border-solid border-[#FFFFFF33] w-14 h-14 rounded-full'><ion-icon name="share-alt"></ion-icon></div>
          </div>
          </div>
        </div>
        </div>
      </div>
      <div>
        <p className='text-colorWhite text-[18px] w-[1250px] mt-8'>
          {data.overview}
        </p>
        <div className='mt-[50px]'>
          <p className='text-colorWhite text-[25px] mb-4'>Top Cast</p>
          <div className='grid grid-cols-5 gap-y-3'>
          {
            acts.map((el,i)=>{
              if (i<10) {
                return(
                  <div className='flex gap-2' key={i}>
                    <img className='w-[80px] ' src={img_url+el.profile_path} alt="" />
                    <div className='text-colorWhite flex justify-center items-center flex-col'>
                      <p>{el.name}</p>
                      <p>{el.character}</p>
                    </div>
                  </div>
                )
              }
            })
          }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MoviePage