/** @format */

import React from "react";
import NavContact from "../components/NavContact";
import Img1 from "../assets/ProductsImgs/Img1.png";
import Img2 from "../assets/ProductsImgs/Img2.png";
import Img3 from "../assets/ProductsImgs/Img3.png";
import Img4 from "../assets/ProductsImgs/Img4.png";
import Img5 from "../assets/ProductsImgs/Img5.png";
import Img6 from "../assets/ProductsImgs/Img6.png";

const Products = () => {
  const ProductsItems = [
    {
      id: 1,
      ProductName: "Shaker",
      Price: "22.00$",
      src: Img1,
      to: "https://twitter.com/SaadElmasrour",
    },
    {
      id: 2,
      ProductName: "Workout Shorts",
      Price: "14.99$",
      src: Img2,
      to: "https://twitter.com/SaadElmasrour",
    },
    {
      id: 3,
      ProductName: "Straps pul",
      Price: "19.99$",
      src: Img3,
      to: "https://twitter.com/SaadElmasrour",
    },
    {
      id: 4,
      ProductName: "ISO Protein",
      Price: "39.99$",
      src: Img4,
      to: "https://twitter.com/SaadElmasrour",
    },
    {
      id: 5,
      ProductName: "Travel Protein Powder",
      Price: "16.99$",
      src: Img5,
      to: "https://twitter.com/SaadElmasrour",
    },
    {
      id: 6,
      ProductName: "Womens T-Shirts",
      Price: "14.99$",
      src: Img6,
      to: "https://twitter.com/SaadElmasrour",
    },
  ];
  return (
    <div className='w-full h-auto flex justify-center'>
      <NavContact />
      <div className='container min-w-[370px] mt-20 py-10 lg:px-3 xsm:px-1'>
        <div className='w-full flex justify-center'>
          <h1 className='text-[54px] lg:text-[70px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-10'>
            Our Products
          </h1>
        </div>
        <div className="w-full h-auto grid lg:grid-cols-3 md:grid-cols-2 xsm:grid-cols-1 gap-y-6 gap-x-8 place-items-center">
            {ProductsItems.map((item, id) => (
            <div key={id} class='h-[400px] bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl w-[320px] justify-between shadow-lg'>
              <div className="h-[75%] bg-white rounded-xl w-full flex justify-center">
                <div className="h-full w-full">
                    <img src={item.src} alt="" className="object-contain h-full w-full" />
                </div>
              </div>
              <div class='flex flex-col gap-4'>
                <div class='flex flex-row justify-between'>
                  <div class='flex flex-col'>
                    <span class='text-xl font-bold'>{item.ProductName}</span>
                  </div>
                  <span class='font-bold  text-red-600'>{item.Price}</span>
                </div>
                <a href={item.to} className="">
                <button class='hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md w-full'>
                  By Now
                </button>
                </a>
              </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
