/** @format */

import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='footerbg sm:h-[300px] h-[250px] flex justify-center items-end'>
      <div className='container h-auto min-w-[360px]'>
        <div className='lg:px-24 md:px-20 sm:px-5 py-5 mb-4'>
          <div className='w-full max-w-screen-xl min-h-20 mx-auto px-10'>
            <div className='flex justify-between items-center sm:flex-row flex-col gap-y-5'>
              <div className='text-center text-white footertextcolor'>
                © Copyright 2023 <a href="https://twitter.com/SaadElmasrour" className="cursor-pointer ml-2">SAAD EL MASROUR.</a>
              </div>
              <div className='gap-x-4 gap-y-4 items-center flex'>
                <a href='https://twitter.com/saadelmasrour'>
                  <FaInstagram
                    className='icon text-white footertextcolor'
                    size={30}
                  />
                </a>
                <a href='https://twitter.com/saadelmasrour'>
                  <FaFacebook
                    className='icon text-white footertextcolor'
                    size={30}
                  />
                </a>
                <a href='https://twitter.com/saadelmasrour'>
                  <FaYoutube
                    className='icon text-white footertextcolor'
                    size={30}
                  />
                </a>
                <a href='https://twitter.com/saadelmasrour'>
                  <RiTwitterXFill
                    className='icon text-white footertextcolor'
                    size={30}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
