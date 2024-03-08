const ServiceAreas = () => {
    return(
        <section
        className="
        mt-8
        mb-32 
        flex 
        flex-col 
        items-center 
        shadow-lg
        p-4
        pb-6
        text-[1.2rem] font-[gillsans]
        rounded-lg
        min-[540px]:w-3/4
        md:w-1/2
        shadow-xl
    " 
        >
   <h2
   className="
    text-lg 
    md:text-xl
   text-center 
   font-[encyclopaediea] 
   text-white 
   rounded-xl
   mb-4 
   p-2 
   bg-[#e41314]"
   >Pro Budget Handyman Serves the whole Salt Lake Vally and more!</h2>
    <div className="
    rounded-xl
    grid 
    grid-cols-2  
    lg:grid-cols-4 
    gap-2 
    container  
    ">
        <ul className="flex flex-col items-center">
        <li className="mb-2 text-gray-800-center md:text-md text-sm">Riverton</li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">Murray</li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">Sandy</li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">Lehi</li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">American Fork</li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">Salt Lake City</li>
       </ul>
        <ul className="flex flex-col items-center">
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">White City Township</li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">West Valley City</li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">West Jordan</li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">Taylorsville</li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">South Salt Lake</li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">South Jordan</li>
       </ul>
        <ul className="flex flex-col items-center">
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">Millcreek</li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">Midvale</li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">Magna Township</li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">Kearns Township </li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">Holladay</li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">Herriman</li>
       </ul>
        <ul className="flex flex-col items-center">
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">Draper</li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">Cottonwood Heights</li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">Bluffdale</li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">Brighton</li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">Copperton Township</li>
        <li className="mb-2 text-gray-800 text-center md:text-md text-sm">Alta</li>
       </ul>
    </div>
    <a className="
       mt-8
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
        href="tel:801-856-8040">Call Now</a>
      </section>
    );
};
export default ServiceAreas;