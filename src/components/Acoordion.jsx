import React, {useState} from "react";
import { AiOutlineRight } from "react-icons/ai";
const Accordion = (props) => {
    const [data, setData] = useState(props.datas);
    
    const handleToggleActive = () => {
        let activeNew = data.active === 1 ? 0 : 1;
        setData({...data, active : activeNew});
    }

    return (
        <div className={`overflow-hidden border border-red-600 rounded-xl mb-5 duration-500 group ${data.active === 1 ? 'is-active bg-white' : ''}`}
        >
            <div className="flex items-center bg-red-600 p-4 h-auto">
                <div className="w-full group-[.is-active]:font-bold text-white">
                {data.question} 
                </div>
                <div className="text-white text-xl cursor-pointer duration-500 group-[.is-active]:rotate-[90deg]" onClick={handleToggleActive}>
                    <AiOutlineRight/>
                </div>
            </div>
            <div className="overflow-hidden duration-500 max-h-0 group-[.is-active]:max-h-[100%] px-4 bg-white">
              <div className="py-4 text-red-600">{data.answer} </div>
            </div>
        </div>
    );
}
export default Accordion;