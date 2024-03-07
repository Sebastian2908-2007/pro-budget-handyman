'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";

const Header = () => {
    const test = true;
    const [scrolled, setScrolled] = useState(false);
 
    useEffect(() => {
    const handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    if (isScrolled !== scrolled) {
    setScrolled(!scrolled);
    }
    };
    
    document.addEventListener('scroll', handleScroll);
    return () => {
    // clean up the event handler when the component unmounts
    document.removeEventListener('scroll', handleScroll);
    };
    }, [scrolled]);

    return(
        <header className="bg-white flex flex-row justify-between items-center sticky top-0 z-50">
    <Link
    href='/'
            className='
            
            flex place-items-center  
            gap-2 
            
            lg:pointer-events-auto 
            lg:p-0'
            
          
          >
            
            <Image
              src="/probudget-logo.webp"
              alt="Pro Budget Handyman The best handyman in Utah"
              className={`${scrolled ? 'w-[65%]' : 'w-[100%]'} transition-all duration-500 ease-in-out`}
              width={250}
              height={24}
              priority
            />
          </Link>
          <div className="p-4">
          <Dropdown/>
          </div>
    </header>
    );
};

export default Header;