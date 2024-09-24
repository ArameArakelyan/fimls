import React from 'react'

const Footer = () => {
    return (
        <footer className='w-[1280px] mt-[64px]'>
            <div className='w-full px-[48px]'>
                <div className='w-[1192px] h-[155px] flex justify-start items-start gap-[133px]'>
                    <div className='w-82px h-89px '>
                        <p className='font-medium text-[18px] leading-[22px] text-left text-[#FFFFFFCC]'>Company</p>
                        <p className=' mt-3 font-normal text-[16px] leading-[19px] text-left text-[#FFFFFF80]'>About us</p>
                        <p className='mt-3 font-normal text-[16px] leading-[19px] text-left text-[#FFFFFF80]'>Careers</p>
                    </div>
                    <div className='w-82px h-89px '>
                        <p className='font-medium text-[18px] leading-[22px] text-left text-[#FFFFFFCC]'>Need Help</p>
                        <p className=' mt-3 font-normal text-[16px] leading-[19px] text-left text-[#FFFFFF80]'>Visit Help Centet?</p>
                        <p className='mt-3 font-normal text-[16px] leading-[19px] text-left text-[#FFFFFF80]'>Share Feedback</p>
                    </div>
                    <div>
                        <p className='font-medium text-[18px] leading-[22px] text-left text-[#FFFFFFCC]'>View Website in</p>
                        <div className='flex items-center justify-center border border-solid border-[#FFFFFF33] rounded-[40px] backdrop-blur-2xl bg-[#FFFFFF33] text-[#FFFFFFE6]'>
                            <p>English</p>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>

                    </div>
                    <div>
                        <p className='font-medium text-[18px] leading-[22px] text-left text-[#FFFFFFCC] '>Social Media</p>
                        <div className='flex gap-4'>
                            <div className='flex items-center justify-center h-[42px] w-[42px] border border-solid border-[#FFFFFF33] rounded-[61px] backdrop-blur-2xl bg-[#FFFFFF33] text-[#FFFFFFCC] text-xl'>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </div><div className='flex items-center justify-center h-[42px] w-[42px] border border-solid border-[#FFFFFF33] rounded-[61px] backdrop-blur-2xl bg-[#FFFFFF33] text-[#FFFFFFCC] text-xl'>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='font-medium text-[18px] leading-[22px] text-left text-[#FFFFFFCC] '>Download Our App</p>
                    </div>
                </div>
            </div>
            <div className='border-t border-solid border-[#FFFFFF33] flex justify-between items-center px-[50px]'>
                <div className='flex gap-[40px] text-[#FFFFFF80] font-normal text-[16px] my-[25px]'>
                    <p>© 2023 STREAM X. All Rights Reserved.</p>
                    <p>Terms Of Use </p>
                    <p>Privacy Policy</p>
                    <p>FAQ</p>
                </div>

                <div className="logo flex items-center">
                    <p className="text-colorWhite text-[15px]">STREAM</p>
                    <p className="text-colorRed font-bold text-[27px]">X</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer