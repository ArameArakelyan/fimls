import React from "react";
import { Link } from "react-router-dom";

function View({id}) {
    if (id!=0) {
        return (
            <Link to={`/genres/${id}`}>
            <div className="mr-[50px] py-[6px] px-[13px] border border-solid border-[#FFFFFF33] rounded-[45px] bg-[#FFFFFF33] flex items-center text-colorWhite cursor-pointer">
                <p>View More</p>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
            </Link>
        )
    } else {
        return (
            <Link to={`/topsearch`}>
            <div className="mr-[50px] py-[6px] px-[13px] border border-solid border-[#FFFFFF33] rounded-[45px] bg-[#FFFFFF33] flex items-center text-colorWhite cursor-pointer">
                <p>View More</p>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
            </Link>
        )
    }
    
}

export default View