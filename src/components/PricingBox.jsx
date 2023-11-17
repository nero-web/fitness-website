import MainButton from "../components/MainButton";
import { Link } from "react-router-dom";

function PricingBox({ img, price, month, level, feature1, feature2, feature3, feature4, setopen, setPrice, setLevel}) {
  const handleOpenModal = () => {
    setPrice(price); // Set the price in the parent component's state
    setopen(true);
    setLevel(level);
  };
  return (
    <>
      <div className="flex flex-col lg:w-1/3 bg-white drop-shadow-3xl relative rounded-lg overflow-hidden">
        <div
          style={{ transition: "all 0.3s" }}
          className="relative grayscale hover:grayscale-0"
        >
          <img src={img} alt="pricing_img" className="w-full h-full" />
          <div className="absolute bg-white text-[20px] font-bold w-[14rem] text-center rounded-t-lg py-4 text-[#ff0336] -bottom-[18px] left-0 right-0 mx-auto">
            {level}
          </div>
        </div>
        <div className="flex flex-col items-center pt-[20px] pb-[50px]">
          {/* price */}
          <p className="text-center text-[55px] font-bold relative py-[10px] ">
            <span className="text-[30px] text-[#6d6d6d] absolute font-normal top-8 -left-[3rem]">
              $
            </span>
            {price}
            <span className="text-[22px] text-[#6d6d6d] absolute font-normal bottom-[25px] -right-[4rem]">
              {month}
            </span>
          </p>
          {/* text */}
          <div className="flex flex-col text-[16px] font-medium text-center gap-x-8 gap-y-4 text-[#646464] mb-[30px]">
            <p>{feature1}</p>
            <p>{feature2}</p>
            <p>{feature3}</p>
            <p>{feature4}</p>
          </div>

          
          <MainButton
            color={`!text-white`}
            bg={`bg-[#ff0336]`}
            text="purchase now"
            arrowColor={`!text-white`}
            cN="pricing-cta"
            onClick={handleOpenModal}
            // onClick={() => setopen(true)}
            // goTo="/contact"
          />
          
        </div>
      </div>
      
    </>
  );
}

export default PricingBox;