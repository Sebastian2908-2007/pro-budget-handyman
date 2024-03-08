'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import shimSander1 from '../app/assets/imgs/shim-sander1.webp';
import shimSander2 from '../app/assets/imgs/shim-sander2.webp';
import shimSander3 from '../app/assets/imgs/shim-sander3.webp';
import shimSander4 from '../app/assets/imgs/shim-sander4.webp';
import shimSander5 from '../app/assets/imgs/shim-sander5.webp';
import shimSander6 from '../app/assets/imgs/shim-sander6.webp';
const ShimSander = () => {
    return(
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
            <h2 className="
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
             
             Revolutionize Your Sanding Experience with the ShimSander: The Ultimate Detail Sander Solution
             </h2>

             <div className="
              relative
              flex 
              w-[100%]
              min-[1024px]:w-[60%]
              mb-4
              min-[1024px]:mb-8
              min-[1920px]:mb-14
            ">
            <Image
              className="w-[100%]"
              src={shimSander5}
              alt="Pro Budget Handyman built in electrical"
              sizes='80vw'
             
            />
          </div>
        <div className="min-[1024px]:grid min-[1024px]:grid-cols-2">
          <div className="flex flex-col items-center min-[1024px]:mb-36">

          <div className="
              relative
              flex 
              w-[100%]
              min-[912px]:w-[40%]
              mb-4
              min-[1024px]:mb-8
              min-[1920px]:mb-14
            ">
            <Image
              className="w-[100%]"
              src={shimSander2}
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
        Introducing the &nbsp;<a
            href="https://shimsanders.com/"
           target="_blank"
           rel="noopener noreferrer"
          className="text-[#e41314]">ShimSander</a>&nbsp;, Pro Budget Handyman's proprietary detail sander,
         designed to revolutionize the way you approach sanding projects. The ShimSander
         is not just any tool; 
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
                it's a game-changer in the world of home improvement and restoration.
           With its innovative design and functionality, the&nbsp;<a
            href="https://shimsanders.com/"
           target="_blank"
           rel="noopener noreferrer"
          className="text-[#e41314]">ShimSander</a>&nbsp;
            addresses common challenges faced by DIY enthusiasts and professional handymen alike.   
            </p>
            </motion.div>
            </div>
            <div className="flex flex-col items-center">

          <div className="
              relative
              flex 
              w-[100%]
              min-[912px]:w-[40%]
              mb-4
              min-[1024px]:mb-8
              min-[1920px]:mb-14
            ">
            <Image
              className="w-[100%]"
              src={shimSander3}
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
          One of the most notable benefits of the&nbsp;<a
            href="https://shimsanders.com/"
           target="_blank"
           rel="noopener noreferrer"
          className="text-[#e41314]">ShimSander</a>&nbsp;is its disposable nature.
           Forget the hassle of dealing with worn-out sandpaper or the inconvenience of
            having to stop your work to replace it.
           The ShimSander is designed to be used until it's time to simply replace it with a new one, 
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
               saving you time and energy. This feature not only streamlines your projects
                but also ensures you're
                always working with effective equipment, guaranteeing smoother finishes and more
                 efficient work.    
            </p>
            </motion.div>
               </div>
            <div className="flex flex-col items-center min-[1024px]:mb-36">

          <div className="
              relative
              flex 
              w-[100%]
              min-[912px]:w-[40%]
              mb-4
              min-[1024px]:mb-8
              min-[1920px]:mb-14
            ">
            <Image
              className="w-[100%]"
              src={shimSander4}
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
         Moreover, the&nbsp;<a
            href="https://shimsanders.com/"
           target="_blank"
           rel="noopener noreferrer"
          className="text-[#e41314]">ShimSander</a>&nbsp;excels in reaching those hard-to-access areas that
          traditional sanders simply can't touch.
          Whether it's intricate woodwork, tight corners, or detailed trim work,   
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
            the&nbsp;<a
            href="https://shimsanders.com/"
           target="_blank"
           rel="noopener noreferrer"
          className="text-[#e41314]">ShimSander</a>&nbsp;maneuvers with ease, providing unparalleled access and precision.
             This capability makes it an indispensable tool for restoration projects,
             furniture refinishing, and any task requiring meticulous attention to detail.   
            </p>
            </motion.div>
                </div>
            <div className="flex flex-col items-center min-[1024px]:mb-36">

          <div className="
              relative
              flex 
              w-[100%]
              min-[912px]:w-[40%]
              mb-4
              min-[1024px]:mb-8
              min-[1920px]:mb-14
            ">
            <Image
              className="w-[100%]"
              src={shimSander1}
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
          Another groundbreaking aspect of the&nbsp;<a
            href="https://shimsanders.com/"
           target="_blank"
           rel="noopener noreferrer"
          className="text-[#e41314]">ShimSander</a>&nbsp;is the elimination of manual sandpaper
           changes. This innovative
           design allows you to focus entirely on the task at hand, without the interruption or   
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
            downtime of switching out sandpaper. The result is a significantly more streamlined
             and efficient sanding process, enabling you to achieve flawless results in less time.    
            </p>
            </motion.div>
           </div>
          <div className="flex flex-col items-center min-[1024px]:mb-36">

          <div className="
              relative
              flex 
              w-[100%]
              min-[912px]:w-[40%]
              mb-4
              min-[1024px]:mb-8
              min-[1920px]:mb-14
            ">
            <Image
              className="w-[100%]"
              src={shimSander6}
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
           In summary, the&nbsp;<a
            href="https://shimsanders.com/"
           target="_blank"
           rel="noopener noreferrer"
          className="text-[#e41314]">ShimSander</a>&nbsp;by Pro Budget Handyman is set to transform the
            way we think about and undertake sanding tasks.
            Its disposable nature, ability to reach difficult areas,  
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
         and the convenience of not needing to manually change sandpaper make
          it a standout tool in the toolbox of any handyman or DIY enthusiast. With the&nbsp;<a
            href="https://shimsanders.com/"
           target="_blank"
           rel="noopener noreferrer"
          className="text-[#e41314]">ShimSander</a>&nbsp;,       
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
           Pro Budget Handyman once again demonstrates their commitment to providing
            innovative solutions that enhance efficiency and quality in home improvement projects.     
            </p>
            </motion.div>
          </div>
          </div>
           
          
        
           
        </section>
    );
};
export default ShimSander;