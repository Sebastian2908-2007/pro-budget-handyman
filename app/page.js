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
    ">Considerations When Hiring a Handyman Service in Salt Lake City</h2>
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
    
    When selecting a handyman service in Salt Lake City, it's important to weigh several
     critical factors to ensure the success of your project.
     Start by verifying the handyman's licensing and certifications to comply with local regulations.
    </p>
    <p className="
    text-center 
    mb-6 
    font-[gillsans]   
    md:px-24 
    min-[1024px]:px-36 
    min-[1920px]:px-72
    ">
   Assess their experience in handling tasks similar to your needs, which is key for
    efficient and quality work in residential settings. It's beneficial to check references 
   and reviews from past clients to gauge the handyman's reliability and the quality of their work.
    </p>
    <p className="
    text-center 
    mb-6 
    font-[gillsans]   
    md:px-24 
    min-[1024px]:px-36 
    min-[1920px]:px-72
    ">
  Ensure the handyman service has sufficient insurance, 
    to safeguard all parties involved. Good communication and prompt responsiveness
   are vital qualities for a smooth operation and partnership during the project.
    </p>
    <p className="
    text-center 
    mb-6 
    font-[gillsans]   
    md:px-24 
    min-[1024px]:px-36 
    min-[1920px]:px-72
    ">
   Request a clear and detailed quote, as well as an outlined timeline,
    to help with precise budgeting and scheduling. Finally, make sure the handyman
     is knowledgeable about Salt Lake City's
    building codes and regulations, ensuring a smooth and compliant project execution.
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
          <span className='font-bold text-[#c35b5c]'>License and Certification:</span>
        &nbsp;
        Confirm the handyman's qualifications for residential work in Salt Lake City.
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
          <span className='font-bold text-[#c35b5c]'>Experience:</span>
        &nbsp;
        Check for a history of handling similar home improvement or repair tasks.
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
          <span className='font-bold text-[#c35b5c]'>References and Reviews:</span>
        &nbsp;
        Look for feedback from previous clients to verify workmanship and reliability.
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
          <span className='font-bold text-[#c35b5c]'>Insurance Coverage:</span>
        &nbsp;
        Make sure there's appropriate insurance to cover liability and other potential issues.
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
          <span className='font-bold text-[#c35b5c]'>Effective Communication:</span>
        &nbsp;
        Evaluate the handyman's willingness to communicate openly and efficiently.
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
        &nbsp;
        Insist on a straightforward and detailed estimate to avoid unexpected costs. Also realize 
        most projects need to be assessed in person.
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
          <span className='font-bold text-[#c35b5c]'>Local Regulations Knowledge:</span>
        &nbsp;
        The handyman should be familiar with and adhere to local building codes.
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
          Drywall Installation and Repair
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
        <li className='mb-8 '>Patching holes and cracks</li>
        <li className='mb-8'>Installing new drywall</li>
        <li className='mb-8'>Sanding and priming drywall for painting</li>
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
        Painting and Wall Treatments
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
        <li className='mb-8'>Interior and exterior painting</li>
        <li className='mb-8'>Wallpaper installation and removal</li>
        <li className='mb-8'>Applying textures to walls</li>
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
        Flooring Installation and Repair
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
        <li className='mb-8'>Installing tile, hardwood, laminate, or vinyl flooring</li>
        <li className='mb-8'>Repairing or replacing damaged floorboards</li>
        <li className='mb-8'>Grout repair and replacement</li>
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
        Electrical Repairs and Installations
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
        <li className='mb-8'>Replacing light fixtures and ceiling fans</li>
        <li className='mb-8'>Installing or replacing outlets and switches</li>
        <li className='mb-8'>Upgrading electrical panels</li>
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
        Light Fixture and Ceiling Fan Installation
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
        <li className='mb-8'>Installing new light fixtures to brighten up your space</li>
        <li className='mb-8'>Ceiling fan assembly and installation for improved air circulation</li>
        <li className='mb-8'>Upgrading switches for dimmers or smart controls for enhanced ambiance and energy savings</li>
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
        Furniture Assembly and Repair
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
        <li className='mb-8'>Assembling flat-pack furniture</li>
        <li className='mb-8'>Stabilizing wobbly furniture for safety and durability</li>
        <li className='mb-8'>Tightening loose chairs and tables</li>
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
        Appliance Installation
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
        <li className='mb-8'>Expert installation of dishwashers, washers, and dryers</li>
        <li className='mb-8'>Ensuring seamless replacement of appliances with precision</li>
        <li className='mb-8'>Vent cleaning specifically for dryer installations</li>
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
        Carpentry and Woodworking
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
        <li className='mb-8'>Building or repairing cabinets</li>
        <li className='mb-8'>Installing shelving and storage solutions</li>
        <li className='mb-8'>Custom woodworking projects</li>
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
        Door and Window Services
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
        <li className='mb-8'>Installing or replacing doors and windows</li>
        <li className='mb-8'>Weatherproofing doors and windows</li>
        <li className='mb-8'>Repairing window screens</li>
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
        Home Security Upgrades
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
        <li className='mb-8'>Peephole installation for front and back doors</li>
        <li className='mb-8'>Adding deadbolts and security locks</li>
        <li className='mb-8'>Window security films</li>
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
        Outdoor and Garden Maintenance
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
        <li className='mb-8'>Repairing decks and patios</li>
        <li className='mb-8'>Fence repair and installation</li>
        <li className='mb-8'>Gutter cleaning and repair</li>
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
        General Maintenance
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
        <li className='mb-8'>Smoke detector and carbon monoxide detector battery replacement</li>
        <li className='mb-8'>Seasonal home maintenance, including weatherproofing and sealing</li>
        <li className='mb-8'>Air filter replacement for improved indoor air quality</li>
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

