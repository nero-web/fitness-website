/** @format */

import React from "react";
import Img1 from "../assets/FitNewsImgs/Img1.jpg";
import Img2 from "../assets/FitNewsImgs/Img2.jpg";
import Img3 from "../assets/FitNewsImgs/Img3.jpg";
import Img4 from "../assets/FitNewsImgs/Img4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RedTitle from "../assets/PrincingImages/title-bg.svg";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
  

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

const FitNews = () => {
  const CardsData = [
    {
      title: "Exercise volume",
      date: "21/08/2023",
      src: Img3,
      to: "/blog/volume",
      views: "1.3k",
    },
    {
      title: "The Energie",
      date: "21/09/2023",
      src: Img2,
      to: "/blog/energie",
      views: "2.3k",
    },
    {
      title: "How to burn calories easily and without a teacher",
      date: "07/11/2023",
      src: Img1,
      to: "/blog/calburn",
      views: "1.3k",
    },
    {
      title: "What Is Yoga",
      date: "02/12/2023",
      src: Img4,
      to: "/blog",
      views: "1.3k",
    },
  ];


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className='h-auto w-full flex justify-center py-10'>
      <div className='container min-w-[360px] h-auto md:px-2 xsm:px-1 flex flex-col'>
        <div className="relative">
        <p className='text-white relative z-10 text-[15px] uppercase font-bold mb-8'>News</p>
        <img
            src={RedTitle}
            alt='text_bg'
            className='w-[12rem] absolute top-[-6px] left-[-69px]'
          />
        <h1 className="text-[54px] xxl:text-[90px] lg:text-[60px] font-primary font-bold capitalize lg:leading-[110%] tracking-[-0.05em] mb-2">
          Latest articles from all categories!
        </h1>
        </div>
        <div className='w-full m-auto mb-5'>
          <div className='mt-20'>
            <Slider {...settings}>
              {CardsData.map((card, index) => (
                <Link to={card.to}>
                <div
                  className='flex flex-col bg-white rounded-lg overflow-hidden shadow-xl h-[372px]'
                  key={index}>
                  {/*dark:bg-gray-900 */}
                  <a
                    rel='noopener noreferrer'
                    href='https://twitter.com/SaadElmasrour'
                    aria-label='Te nulla oportere reprimique his dolorum'>
                    <img
                      alt=''
                      className='bg-cover w-full h-52 dark:bg-gray-500'
                      src={card.src}
                    />
                  </a>
                  <div className='flex flex-col flex-1 p-6'>
                    <a
                      rel='noopener noreferrer'
                      href='https://twitter.com/SaadElmasrour'
                      aria-label='Te nulla oportere reprimique his dolorum'></a>
                    <a
                      rel='noopener noreferrer'
                      href='https://twitter.com/SaadElmasrour'
                      className='text-xs tracki hover:underline dark:text-violet-400'>
                      Learn More
                    </a>
                    <h3 className='flex-1 py-2 text-lg font-semibold leadi text-black'>
                      {card.title}
                    </h3>
                    <div className='flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400'>
                      <span>{card.date}</span>
                      <span>{card.views}</span>
                    </div>
                  </div>
                </div>
              </Link>
              ))}
            </Slider>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center">
            <Link to={'/blog'}>
            <button className="w-40 font-primary bg-red-600 text-xl rounded py-3 text-white border border-red-600 hover:bg-black hover:border-black hover:text-white transition duration-500 mt-4">Another Blogs</button></Link>
        </div>
      </div>
    </div>
  );
};

export default FitNews;
