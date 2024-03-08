import Image from "next/image";
import google from '../app/assets/imgs/google.webp';
import Review from "./Review";
import { reviewData } from "@/app/reviewData";
const Google = () => {
    return(
        <section className="flex flex-col items-center mt-8">
             <Image
          className="w-[80%] min-[768px]:w-[20%]"
          src={google}
          alt="Pro Budget Handyman Google reviews section header"
          sizes='80vw'
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {reviewData.map((data) => (
                <Review key={data.key} props={data}/>
            ))}
        </div>
        <div className="flex flex-row items-center justify-between w-[80%] mt-4">
        <a
          aria-label='link to business profile'
           href="https://maps.app.goo.gl/PkFuJvaXVmGzvhB69"
           target="_blank"
           rel="noopener noreferrer"
          className="text-[0.7rem] p-4 text-[#F4B400] underline hover:text-[#e41314] rounded-xl">
          See reviews on Google
          </a>
          <a className="
      
        font-[encyclopaediea]
        text-xs
        min-[360px]:text-lg
        bg-[#e41314]
        shadow-xl
       
        text-center
        rounded-md
        text-[#ebebeb]
        p-1
        hover:bg-[#c35b5c]
        hover:opacity-100
        " 
        href="tel:801-856-8040">Call Us</a>
        </div>
        </section>
    );
};

export default Google;