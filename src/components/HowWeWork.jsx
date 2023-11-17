/** @format */

import React from "react";
import HowWeWorkData from "../components/HowWeWorkData";
import RedTitle from "../assets/PrincingImages/title-bg.svg";

const HowWeWork = () => {
  return (
    <div className='w-full h-auto justify-center flex mb-10' id="HowWeWork">
      <div className='container h-auto md:px-2 xsm:px-1 min-w-[355px]'>
        <div className='mb-14 relative'>
        <p className='text-white relative z-10 text-[15px] uppercase font-bold mb-8'>
            How to subscribe?
          </p>
          <img
            src={RedTitle}
            alt='text_bg'
            className='w-[16rem] absolute top-[-9px] left-[-55px]'
          />
          <h1 className='text-[54px] xxl:text-[90px] lg:text-[60px] font-primary font-bold capitalize lg:leading-[110%] tracking-[-0.05em] mb-2'>How i can subscribe and starting?</h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 xsm:grid-cols-1 md:gap-10 xsm:gap-1">
        {HowWeWorkData.map((item, id) => (
          <div
            key={id}
            className='HowCarthov transition flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl min-h-[340px] w-full card-item-div md1000:min-h-[260px]'>
            <img src={item.img} alt='box_img' className=' w-[75px] mb-4' />
            <p className=' text-[24px] font-bold uppercase mb-7'>
              {item.title}
            </p>
            <p className='text-[15px] font-medium leading-2 w-full'>
              {item.description}
            </p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
