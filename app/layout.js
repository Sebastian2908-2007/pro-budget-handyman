
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { FaFacebookSquare } from "react-icons/fa";
import Header from "@/components/Header";
import Link from "next/link";
//#e41314 main red
// #1a0708 black
// #f8eeed tanish
// #c77e82 pinkish beigh
// #c35b5c darker pinkish red
// #c6b3b4 greyish pink
// #d1a19f light pinkish red
// #ababab silver
// #644c4a brown
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pro Budget Handyman || handyman services in Salt Lake City Utah",
  description: "Discover the ultimate solution for all your home repair needs with Pro Budget Handyman  your go-to choice for the best handyman services in Salt Lake City, Utah. Our skilled professionals deliver top-notch, budget-friendly solutions to transform your space. From minor fixes to major renovations, trust us to handle it all with precision and expertise. Elevate your home maintenance experience with Pro Budget Handyman where quality meets affordability in Salt Lake City.",
  keywords: [
    'handyman salt lake city utah', 
    'handyman utah',
    'park city handyman',
    'handyman slc',
    'handyman west jordan',
    'handyman utah county',
    'handyman draper utah',
    'handyman south jordan utah',
    'handyman services utah',
    'handyman west jordan utah',
  ],
  metadataBase: new URL('https://probudgethandyman.com/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/og-image.png',
  },
};


const currentYear = new Date().getFullYear();
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}  style={{ height: '100%' }}>

    <Header/>

      <main className="
      mainClass 
      flex 
      min-h-screen 
      pb-[3rem]
       max-w-[100%] 
      flex-col 
      items-center 
      justify-between
      " >
        {children}
      </main> 
        
      <footer className="bg-[#e41314] p-2 text-center w-[100%]">
        <div className="container mx-auto w-[100%]">
          <div className="
          flex 
          flex-col 
          justify-evenly 
          mb-2 
          min-[1024px]:mb-8
          min-[1024px]:mt-4
          "
          >
            <Link href='/Contact' className="
            text-white 
            font-[toroka] 
            text-xl 
            mb-4 
            min-[412px]:text-2xl
            min-[768px]:text-3xl
            underline
            hover:text-[#e41314]
            ">Contact us</Link>
            <div className="
            min-[1024px]:flex
            min-[1024px]:flex-row
            min-[1024px]:items-center
            ">
            <div className="
            flex 
            flex-row 
            items-center 
            px-8 min-[360px]:px-14 
            min-[412px]:px-28
            min-[540px]:px-44
            min-[768px]:px-64
            min-[1024px]:px-6
            min-[1366px]:px-2
            mb-4
            ">
            <span className="text-white font-[toroka]">Phone:</span>
            &nbsp;
            <a className=" 
        font-[toroka] 
        text-lg
        text-white
        hover:text-[#e41314]
        " 
        href="tel:801-856-8040">
          801-856-8040
          </a>
            </div>
            <div className="
            flex 
            flex-row 
            items-center 
            px-4 min-[360px]:px-10 
            min-[412px]:px-20
            min-[540px]:px-40
            min-[768px]:px-64
            min-[1024px]:pl-[32rem]
            min-[1024px]:pr-0
            min-[1280px]:pl-[46rem]
            min-[1366px]:pl-[50rem]
            min-[1920px]:pl-[66rem]
            ">
            <span className="text-white font-[toroka]">Email:</span>
            &nbsp;
            <a className=" 
        font-[toroka] 
        text-lg
        text-white
        hover:text-[#e41314]
        text-[.9rem]
        min-[360px]:text-[1rem]
        " 
        href="mailto:probudgethandyman@gmail.com">
          probudgethandyman@gmail.com
          </a>
            </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
          <p className="text-white text-[.6em] ">
            &copy; {currentYear} Pro Budget Handyman
          </p>
          <a
          aria-label='facebook page for Pro Budget Handyman'
           href="https://www.facebook.com/Probudgethandyman/"
           target="_blank"
           rel="noopener noreferrer"
          className="p-4 hover:bg-[#e41314] rounded-xl">
          <FaFacebookSquare size={28} style={{color:'white'}}/>
          </a>
          <a
            className="
            pointer-events-none 
            flex 
            place-items-center 
            gap-2 
            p-2
            font-[manhattan] 
            lg:pointer-events-auto 
            lg:p-0
            text-[.65rem]
            text-white
            "
            href="https://topdev.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            built By{" "}
            <Image
              src="/td.png"
              alt="Tiny Topdev Tech Logo"
              width={15}
              height={15}
              
            />
          </a>
          </div>
        </div>
      </footer>

      </body>
    </html>
  );
}
