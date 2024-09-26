import React from "react";
import Header from "../../components/Header";
import Spider_logo from "../../images/spider_logo.png"
import useFetch, { api_key, api_url, img_url, main_url } from "../../costume hooks/Fetch/useFetch";
import FilmLine from "../../components/FilmLine";
import Footer from "../../components/Footer";
import View from "../../components/ViewButton";
import { Link } from "react-router-dom";

function Home() {
    const data = useFetch(api_url, "GET")
    let movies = []
    if (Object.keys(data).length !== 0) {
        movies = [...data.results]
    }

    const data1 = useFetch(main_url + "/discover/movie?" + api_key + "&with_genres=28", "GET")
    let action = []
    if (Object.keys(data1).length !== 0) {
        action = [...data1.results]
    }

    const data2 = useFetch(main_url + "/discover/movie?" + api_key + "&with_genres=18", "GET")
    let drama = []
    if (Object.keys(data2).length !== 0) {
        drama = [...data2.results]
    }

    const data3 = useFetch(main_url + "/discover/movie?" + api_key + "&with_genres=35", "GET")
    let comedy = []
    if (Object.keys(data3).length !== 0) {
        comedy = [...data3.results]
    }
    return (
        <div className="bg-bgColor_1 w-full flex justify-center items-center flex-col">
            <div className="back_poster">
                <Header />
                <div className="mt-[200px] flex justify-center items-center flex-col ">
                    <img className="w-[357px]" src={Spider_logo} alt="" />
                    <div className="flex items-center text-[#FFFFFFCC] text-[20px] gap-[33px]">
                        <div className="border-2 rounded-full border-colorWhite py-[6px] px-3">
                            <p>CBFC:U/A</p>
                        </div>
                        <div>
                            <p>Action</p>
                        </div>
                        <div>
                            <p>Adventure</p>
                        </div>
                        <div>
                            <p>2h 38m</p>
                        </div>
                    </div>
                    <div className="w-[436px] h-[57px] font-normal mt-5 text-[16px] text-colorWhite text-center">
                        <p>When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.</p>
                    </div>
                    <div className=" mt-[27px] flex">
                    <button className="mr-5 bg-[#FFFFFFE6] pr-[33px] pl-[65px] border-[#FFFFFF33] rounded-[40px] flex justify-center items-center"><p className='text-[#262626] text-xl font-normal'>Watch Now</p></button>
                    <Link to={`/movie/634649`}><button className='border border-solid border-[#FFFFFF33] rounded-[40px] backdrop-blur-2xl bg-[#FFFFFF1A]'><p className= 'py-[15px] px-5 text-colorWhite font-normal text-xl'>More Info</p></button></Link>
                    </div>
                    <div className="w-full mt-[57px] bg">
                        <p className="ml-[72px] font-medium text-colorWhite text-2xl leading-[34px] text-start">Latest & Trending</p>
                        <div className="flex">
                            {movies.map((el, i) => {
                                if (i < 5) {
                                    return (
                                        <div className="relative num w-[250px] h-[298px] text-[#ffffffe6] text-[250px] leading-[298px] text-center" key={i}>
                                            <p>{i + 1}</p>
                                            <img className="absolute w-[138px] h-[178px] left-[143px] top-[92px] border border-solid rounded-xl border-[#ffffffe6]" src={img_url + el.poster_path} alt="" />
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="mt-[58px]">
                    <div className="flex justify-between">
                        <p className="text-colorWhite text-[28px] font-medium leading-8 text-center w-[183px] h-[34px] ml-10">Top Searches</p>
                        <View id={0}/>
                    </div>
                    <FilmLine films={movies} />
                </div>
                <div className="mt-[58px]">
                    <div className="flex justify-between">
                        <p className="text-colorWhite text-[28px] font-medium leading-8 text-center w-[183px] h-[34px] ml-10">Action</p>
                        <View id={28}/>
                    </div>
                    <FilmLine films={action} />
                </div>
                <div className="mt-[58px]">
                    <div className="flex justify-between">
                        <p className="text-colorWhite text-[28px] font-medium leading-8 text-left w-[300px] h-[34px] ml-10">Romance and Drama</p>
                        <View id={18}/>
                    </div>
                    <FilmLine films={drama} />
                </div>
                <div className="mt-[58px]">
                    <div className="flex justify-between">
                        <p className="text-colorWhite text-[28px] font-medium leading-8 text-center w-[183px] h-[34px] ml-10">Comedy</p>
                        <View id={35}/>
                    </div>

                    <FilmLine films={comedy} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home