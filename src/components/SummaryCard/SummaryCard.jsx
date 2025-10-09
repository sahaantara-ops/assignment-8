import React from 'react';

const SummaryCard = () => {
    return (
       <div className='flex flex-col h-[300px] w-[auto] text-center justify-center p-20 bg-purple-500  gap-10'>
            <div >
                <h3 className='w-auto h-[24px] text-white font-bold text-2xl '>Trusted By Millions, Built For You </h3>
            </div>
            <div className='flex justify-around'>
                <div className='w-auto h-auto flex-col gap-5 '>
                <p className='text-white w-[342px] h-[24px]'>Total Downloads</p>
                <h4 className='text-white w-[202px] h-[72px] text-4xl ml-15'>29.6M</h4>
                <p className='text-white w-[342px] h-[24px]'>21% more than last month</p>
                </div>
                <div className='w-auto h-auto flex-col gap-5 '>
                <p className='text-white w-[342px] h-[24px]'>Total Reviews</p>
                <h4 className='text-white w-[177px] h-[72px] text-4xl ml-19'>906k</h4>
                <p className='text-white w-[342px] h-[24px]'>46% more than last month</p>
                </div>
                <div className='w-auto h-auto flex-col gap-5 '>
                <p className='text-white w-[342px] h-[24px]'>Active Apps</p>
                <h4 className='text-white w-[160px] h-[72px] text-4xl ml-24'>132+</h4>
                <p className='text-white w-[342px] h-[24px]'>31 more will Launch</p>
                </div>
            </div>
            
        </div>
    );
};

export default SummaryCard;