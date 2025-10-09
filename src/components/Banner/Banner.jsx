import React from 'react';
import logo from '../../assets/google-play.png'
import logo2 from '../../assets/app-store.png'
import bannerImage from '../../assets/hero.png'
import SummaryCard from '../SummaryCard/SummaryCard';

const Banner = () => {
    return (
        <div className='w-auto h-auto text-center  mx-auto bg-gray-100'>
            <div className='pt-20'>
                <h1 className=' w-597px h-168px text-4xl  font-weight-extrabold font-black'>
                    We Build <span className='text-fuchsia-800 font-extrabold'><br />Productive</span> Apps
                </h1>
                <p className='w-100px h-64px text-gray-500 mt-5'>
                    At HERO.IO we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
            </div>
            <div className='flex justify-center'>
                <button className='flex  w-[180px] h-[60px]  border-2 border-gray-300 rounded-lg p-2 m-5'>
                    <img src={logo} className='w-8 h-8 m-2' alt='' />
                    <h4 className='text-black font-bold w-[100px] h-[24px]'>Google Play</h4>
                </button>
                <button className='flex  w-[180px] h-[60px]  border-2 border-gray-300 rounded-lg p-2 m-5'>
                    <img src={logo2} className='w-8 h-8 m-2' alt='' />
                    <h4 className='text-black  font-bold w-[100px] h-[24px]'>App Store</h4>
                </button>
            </div>
            <div className='w-full h-full '>
            <img src={bannerImage} className='w-[500px] h-[300px] ml-90' alt=''></img>
            </div>
            <SummaryCard></SummaryCard>
        </div>
    );
};

export default Banner;