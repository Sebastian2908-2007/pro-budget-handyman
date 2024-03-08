import PicSquareShort from "@/components/PicSquareShort";
import PicSquareTall from "@/components/PicSquareTall";
import PicSquareTallest from "@/components/PicSquareTallest";
import PicTallShort from "@/components/PicTallShort";
import PicTallTaller from "@/components/PicTallTaller";
import { PicTallTallerArr,PicTallShortArr,PicSquareTallestArr,PicSquareTallArr,PicSquareShortArr } from "../picData";
const Projects = () => {
    return(
        <section>
            
      {/**Grid starts Square tallest pics */}
      <div className="
      mb-36 
      px-4 
      grid 
      gap-24 
      text-center 
      lg:max-w-5xl 
      lg:w-full 
      lg:mb-0 
      md:grid-cols-3 
      lg:gap-0 
      lg:text-left
      xl:max-w-full
      ">
        {
            PicSquareTallestArr.map((pic) => (
                <PicSquareTallest key={pic.key} props={pic}/>
            ))
        }

         
      </div>
      {/*Grid ends square tallest pics */}

            {/**Grid starts Square short pics */}
      <div className="
      mb-36 
      px-4 
      grid 
      gap-24 
      text-center 
      lg:max-w-5xl 
      lg:w-full 
      lg:mb-0 
      md:grid-cols-2 
      lg:gap-0 
      lg:text-left
      xl:max-w-full
      xl:grid-cols-3
      xl:mb-14
      ">
        {
            PicSquareShortArr.map((pic) => (
                <PicSquareShort key={pic.key} props={pic}/>
            ))
        }
        
      </div>
      {/*Grid ends square short pics */}


           {/**Grid starts Square tall pics */}
           <div className="
      mb-36
      px-4  
      grid 
      gap-24 
      text-center 
      lg:max-w-5xl 
      lg:w-full 
      lg:mb-0 
      md:grid-cols-2 
      lg:gap-0 
      lg:text-left
      xl:max-w-full
      xl:grid-cols-3
      xl:mb-14
      ">
        {
            PicSquareTallArr.map((pic) => (
                <PicSquareTall key={pic.key} props={pic}/>
            ))
        }
         
      </div>
      {/*Grid ends square tall pics */}




      {/**grid starts Tall Taller Pics */}
      <div className="  
      px-4
grid 
gap-24
mb-36
md:col-span-2
text-center 
md:max-w-5xl
md:w-full 
md:mb-0 
md:grid-cols-2 
md:gap-0  
md:text-left
xl:max-w-[100rem]
xl:grid-cols-3 
xl:mb-14
">
     {
            PicTallTallerArr.map((pic) => (
                <PicTallTaller key={pic.key} props={pic}/>
            ))
        }

    </div>
{/**grid ends Tall Taller Pics */}



{/**grid starts Tall Short Pics */}
      <div className="  
  grid 
  gap-24
  px-4
  md:col-span-2
text-center 
md:max-w-5xl
md:w-full 
md:mb-0 
md:grid-cols-2 
md:gap-0  
md:text-left
xl:max-w-[100rem]
xl:grid-cols-3 
xl:mb-14
">
     {
            PicTallShortArr.map((pic) => (
                <PicTallShort key={pic.key} props={pic}/>
            ))
        }

    </div>
{/**grid ends Tall Short Pics */}

        </section>
    );
};
export default Projects;