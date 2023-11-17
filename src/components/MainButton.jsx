import { Link } from "react-router-dom";

function MainButton({ color, bg, cN, arrowColor, hover, text, goTo, onClick }) {
  return (
    <Link
      onClick={onClick}
      to={goTo}
      className={`text-[15px]  ${color} ${bg} ${cN} text-center pt-[18px] font-[600] w-[14rem] h-[3.5rem] rounded-lg uppercase hero-cta relative ml-2 ${hover} `}
    >
      {text} &nbsp;
      <i className={`fa-solid fa-arrow-right text-[#FF0336] ${arrowColor}`}></i>
    </Link>
  );
}

export default MainButton;