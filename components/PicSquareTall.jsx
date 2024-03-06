import Image from "next/image";
const PicSquareTall = ({props}) => {
    const {path,alt,description} = props;
    console.log(props.path);
    return(
        <section
        className="
        p-4 
        group 
        rounded-lg 
        border 
        border-transparent  
        transition-colors 
        hover:border-gray-300 
        hover:bg-gray-100 
        hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30
        h-full
        "
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative flex 
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
        <h2 className={`mb-3 text-2xl font-semibold text-[#0855b1]`}>
        Call Now{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[100%] text-sm text-center opacity-50`}>
         {description}
        </p>
      </section>
    );
};

export default PicSquareTall;