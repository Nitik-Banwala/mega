import React from "react";
import { ROADMAP } from "@/utils/helper";
import Icons from "./common/Icons";

const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className='bg-[url("/assets/images/png/roadmap.png")] -mt-18 bg-top bg-cover bg-no-repeat relative overflow-clip'
    >
      <div className="flex flex-col items-center justify-center">
        <div className="bg-dark-blue w-full pt-20 sm:pt-28 md:pt-[160px] lg:pt-[170px] xl:pt-[215px] relative px-5">
          <h2 className="text-custom-7xl text-white leading-100 font-normal text-center mb-12">
            ROAD<span className="text-blacky">MAP</span>
          </h2>
        </div>

        <div className="relative max-w-[1223px] w-full mt-[110px] md:mt-[196px] pb-[120px] sm:pb-[180px] md:pb-[240px] lg:pb-[170px] xl:pb-[356px] max-xl:px-5">

          {/* UFO */}
          <div className="absolute hidden sm:block h-full w-full -top-[10%] z-50 pointer-events-none">
            <img
              className="sticky top-2 max-sm:left-6 left-16 md:left-24 lg:left-1/2 -translate-x-[48%] z-10 w-[100px] md:w-[150px] lg:w-[170px] xl:w-[200px]"
              src={"/assets/images/png/ufo.png"}
              alt="ufo"
            />
          </div>

          {/* Vertical Line */}
          <div className="absolute hidden sm:block -top-10 max-sm:w-[10px] max-sm:left-6 left-16 md:left-24 lg:left-1/2 -translate-x-1/2 pointer-events-none">
            <Icons icon={"line"} />
          </div>

          {/* Roadmap Items */}
          {ROADMAP.map((item, i) => (
            <div className="relative w-full max-sm:px-4"
             key={item.id}>  
              {item.icon && (
                <div className="absolute hidden sm:block -top-0.5 max-sm:left-6 left-[44px] md:left-[78px] lg:left-1/2 -translate-x-1/2 z-10">
                  <img
                    className="w-18 pointer-events-none"
                    src={item.icon}
                    alt={item.alt}
                  />
                </div>
              )}

              {/* Content */}
              <div
                className={`sm:mx-auto lg:mx-[unset] 
                max-sm:mx-auto max-sm:text-center max-sm:max-w-full
                ${i === 0 && "!mt-0"} 
                ${
                  item.position === "left"
                    ? "lg:mr-auto lg:text-end"
                    : "lg:ml-auto"
                } 
                max-w-[380px] xl:max-w-[452.1px] w-full 
                ${item.id === 1 ? "mt-[49px]" : "mt-[57px]"}`}
              >
                <p
                  data-aos="fade-up"
                  className="uppercase font-normal sm:text-2xl md:text-3xl text-white"
                >
                  {item.title}
                </p>

                <p
                  data-aos="fade-up"
                  className="max-w-[380.1px] mx-auto sm:mx-0 text-white xl:max-w-[452.1px] mt-3 md:mt-4.5 max-sm:text-sm max-sm:leading-relaxed"
                >
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