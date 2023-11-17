/** @format */

import React, { useState, useEffect } from "react";
import NavContact from "../components/NavContact";
import RedTitle from "../assets/PrincingImages/title-bg.svg";
import Img1 from "../assets/FitNewsImgs/Img1.jpg";
import Img2 from "../assets/FitNewsImgs/Img2.jpg";
import Img3 from "../assets/FitNewsImgs/Img3.jpg";
import Img4 from "../assets/FitNewsImgs/Img4.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const blogs = [
    {
      id: 1,
      title: "Exercise volume",
      date: "21/08/2023",
      src: Img3,
      to: "/blog/volume",
      views: "1.3k",
    },
    {
      id: 2,
      title: "The Energie",
      date: "21/09/2023",
      src: Img2,
      to: "/blog/energie",
      views: "2.3k",
    },
    {
      id: 3,
      title: "How to burn calories easily and without a trainer",
      date: "07/11/2023",
      src: Img1,
      to: "/blog/calburn",
      views: "1.3k",
    },
    {
      id: 4,
      title: "What Is Yoga",
      date: "02/12/2023",
      src: Img4,
      to: "volume",
      views: "4.7k",
    },
    {
      id: 5,
      title: "Exercise volume",
      date: "21/08/2023",
      src: Img3,
      to: "volume",
      views: "1.3k",
    },
    {
      id: 6,
      title: "The Energie",
      date: "21/09/2023",
      src: Img2,
      to: "volume",
      views: "4.7k",
    },
    {
      id: 7,
      title: "what Is Yoga",
      date: "07/11/2023",
      src: Img1,
      to: "volume",
      views: "2.3k",
    },
    {
      id: 8,
      title: "How to burn calories easily and without a teacher",
      date: "02/12/2023",
      src: Img4,
      to: "volume",
      views: "1.3k",
    },
    {
      id: 9,
      title: "Exercise volume",
      date: "21/08/2023",
      src: Img3,
      to: "volume",
      views: "4.7k",
    },
    {
      id: 10,
      title: "The Energie",
      date: "21/09/2023",
      src: Img2,
      to: "volume",
      views: "2.3k",
    },
    {
      id: 11,
      title: "what Is Yoga",
      date: "07/11/2023",
      src: Img1,
      to: "volume",
      views: "1.3k",
    },
    {
      id: 12,
      title: "How to burn calories easily and without a teacher",
      date: "02/12/2023",
      src: Img4,
      to: "volume",
      views: "2.3k",
    },
  ];

  const [displayAll, setDisplayAll] = useState(false);
  const visibleBlogs = displayAll ? blogs : blogs.slice(0, 3);

  const toggleDisplay = () => {
    setDisplayAll(!displayAll);
  };
  return (
    <div className='h-auto w-full flex justify-center'>
      <NavContact />
      <div className='container min-w-[360px] h-auto md:px-3 xsm:px-2 flex flex-col mt-28 py-5'>
        <div className='relative mb-16'>
          <p className='text-white relative z-10 text-[19px] uppercase font-bold mb-8 left-[10px]'>
            Learn More
          </p>
          <img
            src={RedTitle}
            alt='text_bg'
            className='w-[13rem] absolute top-[-4px] left-[-27px]'
          />
          <h1 className='text-[54px] xxl:text-[90px] lg:text-[60px] font-primary font-bold capitalize lg:leading-[110%] tracking-[-0.05em] mb-2'>
            All articles in all categories.
          </h1>
        </div>
        <div className='m-auto grid lg:grid-cols-3 md:grid-cols-2 xsm:grid-cols-1 gap-x-8 gap-y-5'>
          {visibleBlogs.map((blog, id) => (
            <Link to={blog.to}>
              <div
                className='flex flex-col bg-white rounded-lg overflow-hidden shadow-xl h-[372px]'
                key={id}>
                {/*dark:bg-gray-900 */}
                <a
                  rel='noopener noreferrer'
                  href='https://twitter.com/SaadElmasrour'
                  aria-label='Te nulla oportere reprimique his dolorum'>
                  <img
                    alt=''
                    className='bg-cover w-full h-52 dark:bg-gray-500'
                    src={blog.src}
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
                    {blog.title}
                  </h3>
                  <div className='flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400'>
                    <span>{blog.date}</span>
                    <span>{blog.views}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className='w-full flex justify-center'>
          <button
            onClick={toggleDisplay}
            className='text-white cursor-pointer bg-red-600 px-5 py-5 rounded-md w-fit mt-5 hover:bg-black transition duration-500'>
            {displayAll ? "Show First Blogs" : "Show All Blogs"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
