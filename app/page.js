'use client'
import Image from "next/image";
import hero from '../public/pro-budget-hero1.webp';
import firstBody from '../public/elavate-pro-budget1.webp';
import consider from '../public/considerations1.webp';
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef(null);
  return (
    <>
    <div className="
          relative
          flex 
          w-[100%]
          
        ">
        <Image
          className=""
          src={hero}
          alt="Pro Budget Handyman the best handyman in salt lake city utah"
          sizes='80vw'
         priority
        />
        <a className="
        absolute 
        font-[encyclopaediea]
        text-xs
        min-[360px]:text-lg
        bg-[#e41314]
        
        w-[45%]
        text-center
        rounded-md
        text-[#ebebeb]
        p-1
        hover:bg-[#1a0708]
        hover:opacity-100
        right-[4.8rem] 
        bottom-16
        min-[360px]:w-[52%]
        min-[360px]:right-[5.2rem]
        min-[360px]:bottom-18
        min-[375px]:right-26
        min-[390px]:right-[5.6rem]
        min-[390px]:bottom-24
        min-[412px]:right-34
        min-[430px]:right-30
        min-[540px]:bottom-28
        min-[540px]:right-32
        min-[768px]:bottom-48
        min-[768px]:right-64
        min-[768px]:w-[30%]
        min-[820px]:right-64
        min-[912px]:right-72
        min-[1024px]:bottom-[15rem]
        min-[1024px]:right-[20rem]
        min-[1280px]:right-[26rem]
        min-[1280px]:bottom-[22rem]
        min-[1280px]:p-4
        min-[1366px]:text-2xl
        min-[1366px]:right-[26rem]
        min-[1366px]:bottom-[25rem]
        min-[1920px]:right-[44rem]
        min-[1920px]:bottom-[32rem]
        min-[1920px]:w-[20%]
        min-[2560px]:right-[62rem]
        min-[2560px]:bottom-[42rem]
        min-[2560px]:w-[15%]
        " 
        href="tel:801-856-8040">Call Now 801-856-8040</a>
       
      </div>
   <div className="
    text-gray-800 
    font-sans 
    p-4
    flex
    flex-col
    items-center
    min-[1024px]:p-14
    min-[1280px]:p-28
    min-[1920px]:p-48
    ">
    <section className="
    container 
    mx-auto 
    my-4 
    px-4
    py-4
    border-[#ababab]
    shadow-lg
    border
    md:border-4
    rounded-md
    min-[1024px]:mt-14
    min-[1024px]:flex
    min-[1024px]:flex-col
    min-[1024px]:items-center
    min-[1920px]:mt-0
    ">
        <h1 className="
        text-center
        text-3xl 
        text-[#c35b5c] 
        font-bold 
        font-[encyclopaediea] 
        mb-4 
        min-[1024px]:text-center
        min-[1024px]:mb-8
        min-[1920px]:mb-14
       
        ">
         
        Elevate Your Space with Pro Budget Handyman: Salt Lake City's Top Handyman Services
         </h1>
         <div className="
          relative
          flex 
          w-[100%]
          min-[1024px]:w-[80%]
          mb-4
          min-[1024px]:mb-8
          min-[1920px]:mb-14
        ">
        <Image
          className=""
          src={firstBody}
          alt="Pro Budget Handyman built in electrical"
          sizes='80vw'
         
        />
      </div>
         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <p className="
        text-center 
        mb-6 
        font-[gillsans]   
        min-[1024px]:text-center 
        md:px-24
        min-[1024px]:px-36 
        min-[1920px]:px-72
        min-[1920px]:mb-14
        ">
       Transform your home with Pro Budget Handyman, where our expertise spans across 
       custom installations and repairs in Utah. Specializing in personalized handyman 
       solutions, we cater to your specific
        home needs, 
        </p>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <p className="
        text-center 
        mb-6 
        font-[gillsans]   
        min-[1024px]:text-center 
        md:px-24
        min-[1024px]:px-36 
        min-[1920px]:px-72
        min-[1920px]:mb-14
        ">
          from electrical fixes to drywall and flooring services.
        Our team is equipped to integrate modern upgrades, including smart home
         enhancements and physical security like deadbolts and code locks, 
        </p>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <p className="
        text-center 
        mb-6 
        font-[gillsans]   
        min-[1024px]:text-center 
        md:px-24
        min-[1024px]:px-36 
        min-[1920px]:px-72
        min-[1920px]:mb-14
        ">
          ensuring your home meets today's standards of convenience and safety.
        Expect top-notch craftsmanship and reliable service for all your home projects,
         big or small. 
        </p>
        </motion.div>
      
    
       <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <p className="
        text-center 
        mb-6 
        font-[gillsans]   
        min-[1024px]:text-center 
        md:px-24
        min-[1024px]:px-36 
        min-[1920px]:px-72
        min-[1920px]:mb-14
        ">
         For expert handyman services that promise to enhance
         the comfort and value of your home,
          &nbsp;
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to call Pro Budget Handyman at 801-856-8040 now!</a>
        </p>
        </motion.div>
    </section>
   
    <section className="
    container 
    mx-auto 
    my-14 
    px-4
    py-4
    border-[#ababab]
    rounded-md
    shadow-lg
    border
    md:border-4
    min-[1024px]:flex
    min-[1024px]:flex-col
    min-[1024px]:items-center
    ">
       <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <h2 className="
    text-3xl 
    text-center
    text-[#c35b5c] 
    mb-4 
    font-bold 
    font-[encyclopaediea] 
    min-[1024px]:text-center
    min-[1024px]:mb-8
    ">Why Pro Budget Handyman Excels in Essential Home Repairs</h2>
    </motion.div>
    <div className="
          relative
          flex 
          w-[100%]
          mb-4
          min-[1024px]:w-[80%]
          min-[1024px]:mb-8
        ">
        <Image
          className=""
          src={consider}
          alt="Pro Budget Handyman built in electrical"
          sizes='80vw'
         
        />
      </div>
    <p className="
    text-center 
    mb-6 
    font-[gillsans]    
    md:px-24 min-[1024px]:px-36 
    min-[1920px]:px-72">
    Pro Budget Handyman is your ideal choice in Salt Lake City and the surrounding areas,
     for simple home repairs that enhance your living spaces. Here's why we stand out:
    </p> 
    <div className="
    text-gray-800 
    font-[gill sans]   
    min-[1024px]:flex 
    min-[1024px]:flex-row 
    min-[1024px]:justify-center 
    min-[1024px]:mt-12
    min-[1024px]:mb-12
    ">
    <ul className="list-disc pl-6 min-[1024px]:w-[50%] font-[gillsans]">
      <li>
    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <div className="mb-4">
          <span className='font-bold text-[#c35b5c]'>Versatility in Services:</span>
          <p className="
    text-center 
    mb-6 
    font-[gillsans]   
   
    ">
  We specialize in a range of crucial home repairs, from interior and exterior door painting
   to installing
   and upgrading various fixtures like interior doors, closet doors, and kitchen cabinets.
    </p>
       
        </div>
      </motion.div>
      </li>

      <li>
      <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <div className="mb-4">
          <span className='font-bold text-[#c35b5c]'>Maintenance Expertise:</span>
          <p className="
    text-center 
    mb-6 
    font-[gillsans]   
  
    ">
  With services like dryer vent cleaning and gutter cleaning, we ensure your home
   functions efficiently and is well-maintained. This attention to detail
   contributes to the longevity and optimal performance of your home systems.
    </p>
        </div>
        </motion.div>
        </li>

        <li>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <div className="mb-4">
          <span className='font-bold text-[#c35b5c]'>Bathroom Upgrades:</span>
          <p className="
    text-center 
    mb-6 
    font-[gillsans]   
   
    ">
  We take care of bathroom installations, including bathroom exhaust fan installation,
   bathroom vanity installation, and bathtub installation. Our expertise extends to 
  shower valve cartridge replacement, ensuring your bathroom stays functional and stylish.
    </p>
        </div>
        </motion.div>
        </li>

        <li>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <div className="mb-4">
          <span className='font-bold text-[#c35b5c]'>Attention to Detail:</span>
          <p className="
    text-center 
    mb-6 
    font-[gillsans]   
   
    ">
  For finishing touches, we offer baseboard and trim installation, adding the perfect
   touch to your interior spaces.
   Our meticulous approach guarantees a polished and well-finished look for your home.
    </p>
        </div>
        </motion.div>
        </li>

        <li>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <div className="mb-4">
          <span className='font-bold text-[#c35b5c]'>Reliable and Prompt Service:</span>
          <p className="
    text-center 
    mb-6 
    font-[gillsans]   
 
    ">
   At Pro Budget Handyman, we're renowned for reliability and prompt responsiveness.
    When you choose us, you're opting for a hassle-free experience,
    ensuring your home repairs are completed efficiently and within the agreed-upon timelines.
    </p>
        </div>
        </motion.div>
        </li>

        <li>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
        <div className="mb-4">
          <span className='font-bold text-[#c35b5c]'>Transparent Pricing:</span>
          <p className="
    text-center 
    mb-6 
    font-[gillsans]   
  
    ">
  Planning your budget becomes stress-free with us. We provide clear,
   project proposals that encompass all aspects of the job,
   preventing unexpected costs and allowing for precise financial planning.
    </p>
        </div>
        </motion.div>
        </li>

    </ul>
    </div>
    </section>
   
    <h2 className="
    text-3xl 
    text-center
    text-[#c35b5c] 
    mb-4 
    font-bold 
    font-[encyclopaediea] 
    min-[1024px]:text-center
    min-[1024px]:mb-8
    ">Our Services Include</h2>
    <div className="
    grid 
    grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-3 
    
    shadow-lg
    
    gap-8 
    container 
    mx-auto 
    my-8 
    p-4
    md:p-8
    rounded-lg
    "
    id="services"
    > <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
     
    rounded-md
    p-4
    bg-white
     shadow-lg
     
     h-full
    " 
    id="ei"
    >
        <h2 className="text-center text-3xl text-[#644c4a] mb-8  font-[encyclopaediea]">
        Ceiling Fan Installation & Replacement
        </h2>
        <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={builtInCabinet}
          alt="Pro Budget Handyman built in electrical"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8 '>Efficient and Safe Installations</li>
        <li className='mb-8'>Expert Replacement Services</li>
        <li className='mb-8'>Enhance Air Circulation in Any Room</li>
      </ul>
          <p className="text-center mb-6">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to Call Now!</a>
          </p>
    </section>
    </motion.div>
 <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
     
    rounded-md
     p-4
     bg-white
      shadow-lg
    
     h-full
    " 
    id="pd"
    >
        <h2 className="text-center text-3xl text-[#644c4a] font-[encyclopaediea]  mb-8">
        Electric Fireplace Installation
          </h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">

        {/*<Image
          className=""
          src={customDoor}
          alt="Pro Budget Handyman custom door"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Cozy and Stylish Home Upgrades</li>
        <li className='mb-8'>Safe and Professional Installation</li>
        <li className='mb-8'>Transform Your Living Space with Ambiance</li>
     </ul>
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to Call Now!</a>
          </p>
    </section>
    </motion.div>
 <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
    
    rounded-md
     p-4
     bg-white
      shadow-lg
     
     h-full
    " 
    id="emes"
    >
        <h2 className="text-center text-3xl text-[#644c4a] font-[encyclopaediea]  mb-8">
        Flooring Repair
        </h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={customStairs}
          alt="Pro Budget Handyman custom staircase"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Swift and Skillful Floor Repairs </li>
        <li className='mb-8'>Comprehensive Solutions for Various Flooring Types</li>
        <li className='mb-8'>Restore the Beauty and Integrity of Your Floors</li>
     </ul>
          <p className="text-center mb-6 font-[gill sans]  ">
         
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to Call Now!</a>
          </p>
    </section>
    </motion.div>
 <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    text-center 
    mb-8 
    flex 
    flex-col 
    items-center
     
    rounded-md
     p-4
     bg-white
      shadow-lg
    
     h-full
    " 
    id="sss"
    >
        <h2 className="text-center text-3xl text-[#644c4a] font-[encyclopaediea]  mb-8">
        Interior & Exterior Light Fixture Installation
        </h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={woodenFloor}
          alt="Pro Budget Handyman wooden flooring"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Illuminate Your Home Inside and Out</li>
        <li className='mb-8'>Quick and Precise Installations</li>
        <li className='mb-8'>Enhance Ambiance with Stylish Fixtures</li>
     </ul>
        <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to Call Now!</a>
          </p>
    </section>
    </motion.div>
 <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
    
    rounded-md
     p-4
     bg-white
      shadow-lg
     
     h-full
    " 
    id="dcs"
    >
        <h2 className="text-center text-3xl text-[#644c4a] font-[encyclopaediea]  mb-8">
        Garbage Disposal Replacement
        </h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={woodRestore}
          alt="Pro Budget Handyman wood restoration and replication"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Hassle-Free Disposal Upgrades</li>
        <li className='mb-8'>Professional Replacement Services</li>
        <li className='mb-8'>Improve Kitchen Efficiency and Hygiene</li>
    </ul>
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to Call Now!</a>
          </p>
    </section>
    </motion.div>
 <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
     
    rounded-md
     p-4
     bg-white
      shadow-lg
    
     h-full
    " 
    id="hes"
    >
        <h2 className="text-center text-3xl text-[#644c4a] font-[encyclopaediea]  mb-8">
        Kitchen and Bathroom Faucet Installation
        </h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={millwork}
          alt="Pro Budget Handyman custom millwork"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Upgrade Your Kitchen and Bathroom Spaces</li>
        <li className='mb-8'>Quick and Reliable Faucet Installations</li>
        <li className='mb-8'>Enhance Functionality and Aesthetics</li>
     </ul>
          <p className="text-center mb-6 font-[gill sans]  ">
         
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to Call Now!</a>
          </p>
    </section>
    </motion.div>
 <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
     
    rounded-md
     p-4
     bg-white
      shadow-lg
     
     h-full
    " 
    id="ees"
    >
        <h2 className="text-center text-3xl text-[#644c4a] font-[encyclopaediea]  mb-8">
        Furniture Assembly
        </h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={remodeling}
          alt="Pro Budget Handyman home renovation and remodeling"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Stress-Free Furniture Setup</li>
        <li className='mb-8'>Efficient and Accurate Assembly</li>
        <li className='mb-8'>Enjoy Your New Furniture Without the Hassle</li>
     </ul>
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to Call Now!</a>
          </p>
    </section>
    </motion.div>
 <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
   
    rounded-md
     p-4
     bg-white
      shadow-lg
   
     h-full
    " 
    id="ldc"
    >
        <h2 className="text-center text-3xl text-[#644c4a] font-[encyclopaediea]  mb-8">
        Interior & Exterior Door Painting
        </h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={shelving}
          alt="custom shelving and storage from Pro Budget Handyman in utah"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Revitalize Your Doors with Professional Painting</li>
        <li className='mb-8'>Expert Color Matching and Application</li>
        <li className='mb-8'>Boost Curb Appeal and Interior Aesthetics</li>
    </ul>
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to Call Now!</a>
          </p>
    </section>
    </motion.div>

 <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >

    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
    
    rounded-md
     p-4
     bg-white
      shadow-lg
     
     h-full
    " 
    id="em"
    >
        <h2 className="text-center text-3xl text-[#644c4a] font-[encyclopaediea]  mb-8">
        Interior Door Installation
        </h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={shelving}
          alt="custom shelving and storage from Pro Budget Handyman in utah"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Seamless and Professional Door Installations</li>
        <li className='mb-8'>Enhance Privacy and Room Functionality</li>
        <li className='mb-8'>Choose from a Variety of Door Styles</li>
    </ul>
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to Call Now!</a>
          </p>
    </section>
    </motion.div>
    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
    
    rounded-md
     p-4
     bg-white
      shadow-lg
    
     h-full
    " 
    id="cci"
    >
        <h2 className="text-center text-3xl text-[#644c4a] font-[encyclopaediea]  mb-8">
        Closet Door Installation
        </h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={shelving}
          alt="custom shelving and storage from Pro Budget Handyman in utah"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Optimize Storage Spaces with Stylish Closet Doors</li>
        <li className='mb-8'>Efficient and Precise Installations</li>
        <li className='mb-8'>Customize Doors to Fit Your Unique Style</li>
    </ul>
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to Call Now!</a>
          </p>
    </section>
    </motion.div>
    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
     
    rounded-md
     p-4
     bg-white
      shadow-lg
   
     h-full
    " 
    id="si"
    >
        <h2 className="text-center text-3xl text-[#644c4a] font-[encyclopaediea]  mb-8">
        Dryer Vent Cleaning
        </h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={shelving}
          alt="custom shelving and storage from Pro Budget Handyman in utah"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Prevent Fire Hazards and Improve Efficiency</li>
        <li className='mb-8'>Thorough and Professional Vent Cleaning</li>
        <li className='mb-8'>Ensure Proper Airflow for Your Dryer</li>
    </ul>
        <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to Call Now!</a>
          </p>
    </section>
    </motion.div>
    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
  
    rounded-md
     p-4
     bg-white
     shadow-lg
    
     h-full
    " 
    id="ti"
    >
        <h2 className="text-center text-3xl text-[#644c4a] font-[encyclopaediea]  mb-8">
        Toilets, Bathroom Exhaust Fan Installation & Replacement
        </h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={shelving}
          alt="custom shelving and storage from Pro Budget Handyman in utah"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Reliable Toilet Installations and Replacements</li>
        <li className='mb-8'>Improve Air Quality with Exhaust Fan Installation</li>
        <li className='mb-8'>Enhance Bathroom Functionality and Comfort</li>
      </ul>
        
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to Call Now!</a>
          </p>
    </section>
    </motion.div>


    {/**NEW 7 starts */}

    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
  
    rounded-md
     p-4
     bg-white
     shadow-lg
    
     h-full
    " 
    id="ti"
    >
        <h2 className="text-center text-3xl text-[#644c4a] font-[encyclopaediea]  mb-8">
        Kitchen Cabinet Installation
        </h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={shelving}
          alt="custom shelving and storage from Pro Budget Handyman in utah"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Customized Cabinet Installations for Your Kitchen</li>
        <li className='mb-8'>Efficient and Precise Installation Services</li>
        <li className='mb-8'>Upgrade Your Kitchen Storage and Style</li>
      </ul>
        
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to Call Now!</a>
          </p>
    </section>
    </motion.div>
    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
  
    rounded-md
     p-4
     bg-white
     shadow-lg
    
     h-full
    " 
    id="ti"
    >
        <h2 className="text-center text-3xl text-[#644c4a] font-[encyclopaediea]  mb-8">
        Bathroom Vanity Installation
        </h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={shelving}
          alt="custom shelving and storage from Pro Budget Handyman in utah"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Transform Your Bathroom with Stylish Vanities</li>
        <li className='mb-8'>Professional and Efficient Installation Services</li>
        <li className='mb-8'>Maximize Storage and Aesthetics in Your Bathroom</li>
      </ul>
        
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to Call Now!</a>
          </p>
    </section>
    </motion.div>
    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
  
    rounded-md
     p-4
     bg-white
     shadow-lg
    
     h-full
    " 
    id="ti"
    >
        <h2 className="text-center text-3xl text-[#644c4a] font-[encyclopaediea]  mb-8">
        Bathtub Installation
        </h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={shelving}
          alt="custom shelving and storage from Pro Budget Handyman in utah"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Luxurious Bathtub Installations for Relaxation</li>
        <li className='mb-8'>Customize Your Bathroom Space</li>
        <li className='mb-8'>Professional and Safe Installation Services</li>
      </ul>
        
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to Call Now!</a>
          </p>
    </section>
    </motion.div>
    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
  
    rounded-md
     p-4
     bg-white
     shadow-lg
    
     h-full
    " 
    id="ti"
    >
        <h2 className="text-center text-3xl text-[#644c4a] font-[encyclopaediea]  mb-8">
        Shower Valve Cartridge Replacement
        </h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={shelving}
          alt="custom shelving and storage from Pro Budget Handyman in utah"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Ensure Optimal Water Temperature and Flow</li>
        <li className='mb-8'>Expert Replacement Services</li>
        <li className='mb-8'>Improve Your Shower Experience</li>
      </ul>
        
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to Call Now!</a>
          </p>
    </section>
    </motion.div>
    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
  
    rounded-md
     p-4
     bg-white
     shadow-lg
    
     h-full
    " 
    id="ti"
    >
        <h2 className="text-center text-3xl text-[#644c4a] font-[encyclopaediea]  mb-8">
        Baseboard and Trim Installation
        </h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={shelving}
          alt="custom shelving and storage from Pro Budget Handyman in utah"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Enhance Interior Design with Stylish Baseboards</li>
        <li className='mb-8'>Professional Installation for a Polished Look</li>
        <li className='mb-8'>Choose from a Variety of Materials and Finishes</li>
      </ul>
        
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to Call Now!</a>
          </p>
    </section>
    </motion.div>
    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
  
    rounded-md
     p-4
     bg-white
     shadow-lg
    
     h-full
    " 
    id="ti"
    >
        <h2 className="text-center text-3xl text-[#644c4a] font-[encyclopaediea]  mb-8">
        Gutter Cleaning
        </h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={shelving}
          alt="custom shelving and storage from Pro Budget Handyman in utah"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Prevent Water Damage with Regular Gutter Maintenance</li>
        <li className='mb-8'>Thorough and Efficient Cleaning Services</li>
        <li className='mb-8'>Ensure Proper Water Drainage from Your Roof</li>
      </ul>
        
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to Call Now!</a>
          </p>
    </section>
    </motion.div>
    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
         >
    <section className="
    mb-8 
    flex 
    flex-col 
    items-center
  
    rounded-md
     p-4
     bg-white
     shadow-lg
    
     h-full
    " 
    id="ti"
    >
        <h2 className="text-center text-3xl text-[#644c4a] font-[encyclopaediea]  mb-8">
        TV Mounting
        </h2>
            <div className="
          relative
          flex 
          w-[100%]
          
        ">
        {/*<Image
          className=""
          src={shelving}
          alt="custom shelving and storage from Pro Budget Handyman in utah"
          sizes='80vw'
         
        />*/}
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full">
        <li className='mb-8'>Professional and Secure TV Installation</li>
        <li className='mb-8'>Customized Placement for Optimal Viewing</li>
        <li className='mb-8'>Concealed Wiring for a Clean and Tidy Look</li>
      </ul>
        
          <p className="text-center mb-6 font-[gill sans]  ">
          <a className=" 
        font-[toroka] 
        text-lg
        text-[#e41314]
        " 
        href="tel:801-856-8040">Click to Call Now!</a>
          </p>
    </section>
    </motion.div>

</div>

      
    </div>
    </>
  );
}

