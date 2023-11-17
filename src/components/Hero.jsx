/** @format */

import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Hero1 from "../assets/Hero_bg1.PNG";




const Hero = () => {
  return (
    <div className="w-full h-auto">
        <div className="relative">

        <div className="relative flex justify-end w-full make_hero_center">
            <div className="absolute top-[40%] right-[50%] flex items-center pl-5 make_hero_relative">
            <div className="h-fit">
            <h1 className="h1">Fitness World
                <br />
                Always with <span className=" text-red-600">You</span></h1>
                <p className=" text-gray-500 text-2xl">Eat Balanced Food, Exercise Regularly,<br></br> And Reconcile With Your Body</p>
                <ScrollLink to="about" spy={true} smooth={true} duration={500}>
                <button className="w-40 font-primary bg-red-600 text-xl rounded py-3 text-white border border-red-600 hover:bg-black hover:border-black hover:text-white transition duration-500 mt-4">Who We Are?</button>
                </ScrollLink>
            </div>
            </div>
            <img src={Hero1} alt="" className="hidden_img"/>
        </div>
        </div>
    </div>
  );
};

export default Hero;
