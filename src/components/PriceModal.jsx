import React, { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import emailjs from '@emailjs/browser';

const PriceModal = ({ open, onClose, selectedPrice, selectedLevel }) => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_32j4ym7', 'template_yup59gg', form.current, 'qZu2bRVf_i12O7WYh')
          .then((result) => {
              console.log(result.text);
              form.current.reset();
          }, (error) => {
              console.log(error.text);
          });
      };

    if (!open) return null;  
    return (
        <div className="price-model z-50">
          <div className="backdrop">
            <div className="trans">
              <div className="froqyj">
                <span className="fro" onClick={onClose}><AiOutlineClose/></span>
                <h1 className="text-center font-primary text-3xl font-bold mb-2">{selectedLevel}</h1>
                <form autoComplete="off" action="" ref={form} method="send" onSubmit={sendEmail}>
                    <input type="text" name="from_name" required placeholder="Name" className="w-full min-h-[40px] text-gray-700 bg-white rounded mb-4 h-[40px] px-2 py-3 text-base leading-7 block out border border-[#e6e7e8]" />
                    <input type="email" name="from_email" required placeholder="Email" className="w-full min-h-[40px] text-gray-700 bg-white rounded mb-4 h-[40px] px-2 py-3 text-base leading-7 block out border border-[#e6e7e8]" />
                    <input type="phone" name="from_phone" required placeholder="Phone" className="w-full min-h-[40px] text-gray-700 bg-white rounded mb-4 h-[40px] px-2 py-3 text-base leading-7 block out border border-[#e6e7e8]" />
                    <input type="text" name="from_level" value={`I choice the ${selectedLevel} subsription :)`} className="subciption_level_input w-[310px] min-h-[40px] text-black bg-white rounded mb-4 h-[40px] px-2 text-base leading-7 block out border border-[#613317]"/>
                    <input className="w-24 h-10 border-2 rounded  brhover cursor-pointer hover:text-white transition duration-500 mt-4" type="submit" value="Send" onClick={(e) => {setTimeout(() => {onClose();}, 2000);}}/>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
};

export default PriceModal;
