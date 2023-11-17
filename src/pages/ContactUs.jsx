import React from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import NavContact from "../components/NavContact";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_32j4ym7', 'template_vig41qw', form.current, 'qZu2bRVf_i12O7WYh')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <div className="w-full h-auto flex justify-center">
        <NavContact/>
        <div className="container min-w-[360px] mt-20">
        <div className='md:py-10 xsm:py-10'>
      <div className='px-5 max-w-[1260px] w-full mx-auto min-h-[20px]'>
        <div className='flex md:flex-row justify-between items-start xsm:flex-col gap-5'>
          <div className='max-w-[305px] w-full '>
            <div className='text-base font-semibold mb-4 text-[#4c5057]'>Contact</div>
            <h3 className='text-black m-0 text-2xl font-semibold leading-8 mb-8'>
              Contact us through the following channels.
            </h3>
            <a
              href='mailto:saadelmasrour26@gmail.com'
              class='color-black underline mb-4'>
              saadelmasrour26@gmail.com
            </a>
            <div className='gap-x-4 gap-y-4 items-center flex mt-6 mb-6'>
              <a href="https://twitter.com/saadelmasrour"><FaInstagram className='icon' size={30} style={{ color: "rgb(255 43 55)" }} /></a>
              <a href="https://twitter.com/saadelmasrour"><FaFacebook className='icon' size={30} style={{ color: "rgb(255 43 55)" }} /></a>
              <a href="https://twitter.com/saadelmasrour"><FaYoutube className='icon' size={30} style={{ color: "rgb(255 43 55)" }} /></a>
              <a href="https://twitter.com/saadelmasrour"><RiTwitterXFill className='icon' size={30} style={{ color: "rgb(255 43 55)" }} /></a>
            </div>
          </div>
          <div className='max-w-[630px] w-full '>
            <h2 className="text-black m-0 text-2xl font-semibold leading-8 mb-8">For any questions, please contact with us</h2>
            <p className="mb-10">Fill the form below.</p>
            <div>
                <form autoComplete="off" action="" ref={form} method="send" onSubmit={sendEmail}>
                    <input type="text" name="from_name" required placeholder="Name" className="w-full min-h-[40px] text-gray-700 bg-white rounded mb-4 h-[40px] px-2 py-3 text-base leading-7 block out border border-[#e6e7e8]" />
                    <input type="email" name="user_email" required placeholder="Email" className="w-full min-h-[40px] text-gray-700 bg-white rounded mb-4 h-[40px] px-2 py-3 text-base leading-7 block out border border-[#e6e7e8]" />
                    <input type="phone" name="number_phone" required placeholder="Phone" className="w-full min-h-[40px] text-gray-700 bg-white rounded mb-4 h-[40px] px-2 py-3 text-base leading-7 block out border border-[#e6e7e8]" />
                    <input name="subject _title" type="text" required placeholder="Subject (Optional)" className="w-full min-h-[40px] text-gray-700 bg-white rounded mb-4 h-[40px] px-2 py-3 text-base leading-7 block out border border-[#e6e7e8]" />
                    <textarea name="message" type="text" maxLength={5000} required placeholder="Message ...." className="w-full h-[auto] text-gray-700 bg-white rounded mb-4 px-2 py-3 text-base leading-7 block out border border-[#e6e7e8]"></textarea>
                    <input className="cursor-pointer w-24 brhover rounded py-3 border-2 hover:text-white transition duration-500 mt-4" type="submit" value="Send"/>
                </form>

            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    </div>
  );
  
};

export default ContactUs;