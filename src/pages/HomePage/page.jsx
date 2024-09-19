import React from "react";
import Header from "../../components/Header";

function Home() {
    return(
        <div className="bg-bgColor_1 w-full h-[2328px]">
            <div className="w-[1280px] bg-posterHome h-[950px] bg-cover bg-gradient-to-r from-black to-bgColor_1 brightness-30">
                <Header/>
            </div>
        </div>
    )
}

export default Home