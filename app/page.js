'use client'
import Image from "next/image";
import hero from '../public/pro-budget-hero2.webp';
import firstBody from '../public/elavate-pro-budget2.webp';
import consider from '../public/considerations1.webp';
import servicePic1 from './assets/imgs/services-_1_.webp';
import servicePic2 from './assets/imgs/services-_2_.webp';
import servicePic3 from './assets/imgs/services-_3_.webp';
import servicePic4 from './assets/imgs/services-_4_.webp';
import servicePic5 from './assets/imgs/services-_5_.webp';
import servicePic6 from './assets/imgs/services-_6_.webp';
import servicePic7 from './assets/imgs/services-_7_.webp';
import servicePic8 from './assets/imgs/services-_8_.webp';
import servicePic9 from './assets/imgs/services-_9_.webp';
import servicePic10 from './assets/imgs/services-_10_.webp';
import servicePic11 from './assets/imgs/services-_11_.webp';
import servicePic12 from './assets/imgs/services-_12_.webp';
import servicePic13 from './assets/imgs/services-_13_.webp';
import servicePic14 from './assets/imgs/services-_14_.webp';
import servicePic15 from './assets/imgs/services-_15_.webp';
import servicePic16 from './assets/imgs/services-_16_.webp';
import servicePic17 from './assets/imgs/services-_17_.webp';
import servicePic18 from './assets/imgs/services-_18_.webp';
import servicePic19 from './assets/imgs/services-_19_.webp';
import servicePic20 from './assets/imgs/services-_20_.webp';
import servicePic21 from './assets/imgs/services-_21_.webp';
import servicePic22 from './assets/imgs/services-_22_.webp';
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
    md:border-0
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
         
        Elevate Your Space with Pro Budget Handyman: Salt Lake City's Top Handyman Service
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
    Pro Budget Handyman specializes in a diverse range of essential home repairs and installations,
     bringing expertise to every corner of your Utah home
        </p>
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
       From seamless door installations
        to efficient gutter cleaning, our team is dedicated to enhancing your living spaces.   
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
        Benefit from our proficiency in interior and exterior door projects, 
        furniture assembly, and flooring repairs. We excel 
        in bathroom upgrades,   
        </p>
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
           including bathtub installations and shower valve cartridge replacements.
       Our comprehensive services
        extend to reliable gutter cleaning, ensuring your home remains in top-notch condition.    
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
    With Pro Budget Handyman, you can trust in our commitment to quality and precision. Choose us for reliable and
     expert handyman services that elevate the comfort and value of your home in Salt Lake City&nbsp;<span className="text-[#e41314]">100% SATISFACTION GUARANTEED</span>.
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
    md:border-0
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
    <ul className="list-disc pl-6 min-[1024px]:grid min-[1024px]:grid-cols-2  font-[gillsans]">
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
    min-[1024px]:text-left 
    mb-6 
    font-[gillsans]   
    min-[1024px]:w-[90%]
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
    min-[1024px]:text-left
    min-[1024px]:w-[90%]
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
   min-[1024px]:text-left
   min-[1024px]:w-[90%]
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
   min-[1024px]:text-left
   min-[1024px]:w-[90%]
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
 min-[1024px]:text-left
 min-[1024px]:w-[90%]
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
  min-[1024px]:text-left
  min-[1024px]:w-[90%]
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
        <Image
          className=""
          src={servicePic9}
          alt="Pro Budget Handyman Ceiling Fan Installation & Replacement"
          sizes='80vw'
         
        />
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full mt-8">
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

        <Image
          className=""
          src={servicePic7}
          alt="Pro Budget Handyman electric fireplace installation"
          sizes='80vw'
         
        />
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full mt-8">
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
        <Image
          className=""
          src={servicePic6}
          alt="Pro Budget Handyman flooring repair"
          sizes='80vw'
         
        />
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full mt-8">
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
        <Image
          className=""
          src={servicePic5}
          alt="Pro Budget Handyman light fixture intallation"
          sizes='80vw'
         
        />      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full mt-8">
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
        <Image
          className=""
          src={servicePic4}
          alt="Pro Budget Handyman garbage disposal replacement"
          sizes='80vw'
         
        />
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full mt-8">
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
        <Image
          className=""
          src={servicePic3}
          alt="Pro Budget Handyman Kitchen and Bathroom Faucet Installation"
          sizes='80vw'
         
        />
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full mt-8">
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
        <Image
          className=""
          src={servicePic22}
          alt="Pro Budget Handyman Furniture Assembly"
          sizes='80vw'
         
        />
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full mt-8">
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
        <Image
          className=""
          src={servicePic2}
          alt="Interior & Exterior Door Painting by Pro Budget Handyman in Salt Lake City Utah"
          sizes='80vw'
         
        />
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full mt-8">
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
        <Image
          className=""
          src={servicePic1}
          alt="Interior Door Installation by Pro Budget Handyman in Salt Lake City Utah"
          sizes='80vw'
         
        />
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full mt-8">
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
        <Image
          className=""
          src={servicePic20}
          alt="Closet Door Installation by Pro Budget Handyman in salt lake city"
          sizes='80vw'
         
        />
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full mt-8">
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
        <Image
          className=""
          src={servicePic19}
          alt="Dryer Vent Cleaning by Pro Budget Handyman in Salt Lake City Utah"
          sizes='80vw'
         
        />
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full mt-8">
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
        <Image
          className=""
          src={servicePic17}
          alt="Toilets, Bathroom Exhaust Fan Installation & Replacement by Pro Budget Handyman in Salt Lake City Utah"
          sizes='80vw'
         
        />
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full mt-8">
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
        <Image
          className=""
          src={servicePic16}
          alt="Kitchen Cabinet Installation by Pro Budget Handyman in Salt Lake City Utah"
          sizes='80vw'
         
        />
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full mt-8">
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
        <Image
          className=""
          src={servicePic15}
          alt="Bathroom Vanity Installation by Pro Budget Handyman in Salt Lake City Utah"
          sizes='80vw'
         
        />
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full mt-8">
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
        <Image
          className=""
          src={servicePic14}
          alt="Bathtub Installation by Pro Budget Handyman in Salt Lake City Utah"
          sizes='80vw'
         
        />
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full mt-8">
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
      <Image
          className=""
          src={servicePic13}
          alt="Shower Valve Cartridge Replacement by Pro Budget Handyman in Salt Lake City Utah"
          sizes='80vw'
         
        />
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full mt-8">
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
        <Image
          className=""
          src={servicePic12}
          alt=" Baseboard and Trim Installation by Pro Budget Handyman in Salt Lake City Utah"
          sizes='80vw'
         
        />
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full mt-8">
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
        <Image
          className=""
          src={servicePic11}
          alt="Gutter Cleaning by Pro Budget Handyman in Salt Lake City Utah"
          sizes='80vw'
         
        />
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full mt-8">
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
        <Image
          className=""
          src={servicePic10}
          alt="TV Mounting by Pro Budget Handyman in Salt Lake City Utah"
          sizes='80vw'
         
        />
      </div>
      <ul className="ml-4 list-disc list-inside font-[macklin] w-full mt-8">
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

