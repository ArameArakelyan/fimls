import React, { useState } from "react";
import img from "../../images/profile.png"
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const [value, setValue] = useState("")
    const navigate = useNavigate()

    function onSubmit(e) {
        e.preventDefault()
        e.stopPropagation();
        setValue("")
        navigate(`/search/${value}`)
    }
    return (
        <header className="flex items-center">

            <Link to={`/`}>
            <div className="logo flex items-center ml-12 mt-9 mr-8">
                <p className="text-colorWhite text-[15px]">STREAM</p>
                <p className="text-colorRed font-bold text-[27px]">X</p>
            </div>
            </Link>
            
            <nav>
                <ul className="flex gap-[30px] mt-8 text-[20px] text-[#ffffffcc]">
                    <Link to={`/`} className=" text-center">Home</Link>
                    <li className=" text-center">Movies</li>
                    <li className=" text-center">Series</li>
                    <li className=" text-center">Trending</li>
                    <li className=" text-center">Categories</li>
                </ul>
            </nav>
            <form onSubmit={onSubmit} className="ml-[226px] mt-[25px]">
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search Movies, Series..." className="pl-[14px] py-2 pr-24 bg-inputBG border-solid border-2 border-[#FFFFFF33] rounded-[40px] text-colorWhite" />
                <ion-icon name="search" color="white"></ion-icon>
            </form>
            <div className="w-[39px] h-[39px] bg-colorWhite rounded-full mt-6 ml-2">
            </div>
        </header>
    )
}

export default Header