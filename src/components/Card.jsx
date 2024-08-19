import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
function Card({data}){

    return(
        <div className="flex
         flex-col  ">
            <div className="absolute top-[60px] z-[10] mx-8">
                <img className=" w-[140px] aspect-square rounded-full z-[25]" src={data.image} alt="" />
                <div className="w-[140px] aspect-square rounded-full bg-black absolute top-[-10px] right-[-10px] z-[-20]"></div>
            </div>
            <div className="mt-5 mx-auto">
                <h2 className="text-lg text-center font-bold capitalize">{data.title}</h2>
                <p className="text-sm text-center font-semibold uppercase">{data.profession}</p>
            </div>
            <div className="mx-auto my-3">
                <FaQuoteLeft/>
            </div>
            <div className=" mx-16">
                <p>{data.text}</p>
            </div>
            <div className="mx-auto my-3">
                <FaQuoteRight/>
            </div>
            
            

        </div>
    )
}
export default Card;