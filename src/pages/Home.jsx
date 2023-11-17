import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Hero_bg2 from "../assets/Hero_bg2.PNG";
import HowWeWork from "../components/HowWeWork";
import Pricing from "../components/Pricing";
import FitNews from "../components/FitNews";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="w-full h-auto">
            <img src={Hero_bg2} alt="" className="z-0 absolute bimge"/>
            <Navbar/>
            <Hero/>
            <About/>
            <HowWeWork/>
            <Pricing/>
            <FitNews/>
            <Faqs/>
            <Footer/>
        </div>
    );
};

export default Home;