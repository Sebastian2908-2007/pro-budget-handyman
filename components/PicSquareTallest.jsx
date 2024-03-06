import Image from "next/image";
import { TbPhoneCall } from "react-icons/tb";
const PicSquareTallest = ({props}) => {
    const {path,alt,description} = props;
    console.log(props.path);
    return(
        <section
        className="
        shadow-lg
        p-4 group 
        rounded-lg
         border 
         border-transparent
         transition-colors
          hover:border-gray-300
           hover:bg-gray-100 
        hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30
        h-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="
        mb-2
        relative flex 
        ">
      <Image
        className="relative w-full"
        src={path}
        alt={alt}
        width={100}
        height={100}
       sizes='80vw'
       
      />
    </div>
        <span className={`mb-3 text-2xl font-semibold text-[#e41314]`}>
        Call Now{' '}
          <a 
          href="tel:801-856-8040"
          className="
          inline-block 
          transition-transform 
          group-hover:translate-x-1 
          motion-reduce:transform-none
          ">
          <TbPhoneCall style={{color:"#e41314"}}/>
          </a>
        </span>
        <p className={`mt-2 max-w-[100%] text-sm text-center opacity-75`}>
         {description}
        </p>
      </section>
    );
};

export default PicSquareTallest;