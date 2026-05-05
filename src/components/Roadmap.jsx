import React from "react";
import { ROADMAP } from "@/utils/helper";  
import Icons from "./common/Icons";
const Roadmap = () => {
  // Roadmap data array
  

  return (
    <div id="roadmap" className='bg-[url("/assets/images/png/roadmap.png")] -mt-18 bg-top bg-cover bg-no-repeat relative overflow-clip'>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-dark-blue w-full pt-20 sm:pt-28 md:pt-[160px] lg:pt-[170px] xl:pt-[215px] relative px-5">
          <h2 className='text-[72px] text-white leading-[100%] font-normal text-center mb-12 '>ROAD<span className='text-[#EE252B]'>MAP</span></h2>
        </div>

        <div className="relative max-w-[1223px] w-full mt-[110px] md:mt-[196px] pb-[120px] sm:pb-[180px] md:pb-[240px] lg:pb-[170px] xl:pb-[356px] max-xl:px-5">
          <div className="absolute h-full w-full -top-[10%] z-50 pointer-events-none">
            <img
              className="sticky top-2 left-16 md:left-24 lg:left-1/2 -translate-x-[48%] z-10 w-[100px] md:w-[150px] lg:w-[170px] xl
              :w-[200px]"
              src={'/assets/images/png/ufo.png'}
              alt="ufo"
            />
          </div>
          <div
            
         
            className="absolute -top-10 max-sm:w-[10px] left-16 md:left-24 lg:left-1/2 -translate-x-1/2 pointer-events-none"> <Icons icon={'line'}/>
          </div>

          {/* Map through roadmap items */}
          {ROADMAP.map((item, i) => (
            <div className="relative max-sm:max-w-[75px] w-full" key={item.id}>
              {item.icon && (
                <div className="absolute -top-0.5 left-[44px] md:left-[78px] lg:left-1/2 -translate-x-1/2 z-10">
                  <img
                    className="w-18  pointer-events-none"
                    src={item.icon}
                    alt={item.alt}
                  />
                </div>
              )}

              <div
                className={`sm:mx-auto lg:mx-[unset] max-sm:ml-auto max-sm:max-w-[255px] ${i === 0 && '!mt-0'} ${item.position === "left"
                    ? "lg:mr-auto lg:text-end"
                    : "lg:ml-auto"
                  } max-w-[380px] xl:max-w-[452.1px] w-full mt-[57px]${item.id === 1 ? " mt-[49px]" : " mt-[57px]"
                  }`}>
                <p data-aos="fade-up" className="uppercase font-normal sm:text-2xl md:text-3xl  text-white">
                  {item.title}
                </p>
                <p data-aos="fade-up"
                  op70
                  className="max-w-[380.1px] text-white xl:max-w-[452.1px] mt-3 md:mt-4.5 max-sm:!text-xs">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
