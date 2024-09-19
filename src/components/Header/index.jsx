import React from "react";
import img from "../../images/profile.png"

function Header() {
    return (
        <header className="flex items-center">

            <div className="logo flex items-center ml-12 mt-9 mr-8">
                <p className="text-colorWhite text-[15px]">STREAM</p>
                <p className="text-colorRed font-bold text-[27px]">X</p>
            </div>
            <nav>
                <ul className="flex gap-7 mt-8 text-[20px] text-[#ffffffcc]">
                    <li className="h-6 text-center">Home</li>
                    <li className="h-6 text-center">Movies</li>
                    <li className="h-6 text-center">Series</li>
                    <li className="h-6 text-center">Trending</li>
                    <li className="h-6 text-center">Categories</li>
                </ul>
            </nav>
            <form action="" className="ml-[226px] mt-[25px]">
                <input type="text" placeholder="Search Movies..." className="pl-[14px] py-2 pr-24 bg-inputBG border-solid border-2 border-[#FFFFFF33] rounded-[40px]" />
            </form>
            <div className="w-[39px] h-[39px] bg-black rounded-full mt-6 ml-2">
            </div>
        </header>
    )
}

export default Header