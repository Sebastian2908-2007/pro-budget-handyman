'use client';
import { useState,useEffect, useRef  } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import Link from 'next/link';
//hover coler #fde1e2
const Dropdown = () => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

    // Close the dropdown when a link is clicked
    const closeDropdown = () => {
        setIsOpen(false);
      };
    

    // Close the dropdown when clicking outside
    useEffect(() => {
      //console.log(dropdownRef.current);
      
        function handleClickOutside(event) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
            console.log('clicking outside');
           // console.log(event.target);
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isOpen,dropdownRef]);

  return (
    <div className="relative inline-block text-left">
      <div className='p-2'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="Dropdown menu button"
          className="text-[#8d6f57] hover:underline"
        >
          <FaBarsStaggered size={28} style={{color:'#644c4a '}} />
        </button>
      </div>

      {isOpen && (
        <div className="
         z-50
         origin-top-right
         absolute right-0
         mt-2
         w-48
         rounded-md
         shadow-lg 
         bg-[#FFFFFF] 
         ring-1 
         ring-black 
         ring-opacity-5 
         focus:outline-none
         "
         
         >
          <div 
          className="py-1" 
          role="menu" 
          aria-orientation="vertical" 
          aria-labelledby="options-menu" 
          ref={dropdownRef}>
        
         <>

         <Link
         onClick={() => {
          closeDropdown();
         }}
         href='/Contact'   
            className="
            block 
            px-4 
            py-2 
            text-[.8em] 
            text-[#1a0708] 
            hover:bg-[#e41314]
            hover:text-[#d9b061]
            
             
            font-[encyclopaediea]
            " 
           
          
            >
              Contact Us
            </Link>
         <Link
         onClick={() => {
          closeDropdown();
         }}
         href='/projects'   
            className="
            block 
            px-4 
            py-2 
            text-[.8em] 
            text-[#1a0708] 
            hover:bg-[#e41314]
            hover:text-[#d9b061]
            
             
            font-[encyclopaediea]
            " 
           
          
            >
              Projects
            </Link>


          
            </>
            
              
            <span 
            className="
            block 
            px-4 
            py-2 
            text-[.8em] 
            text-[#1a0708] 
            hover:bg-[#e41314] 
            hover:text-[#d9b061]
            
             
            font-[encyclopaediea]
            " 
            role="menuitem" 
            onClick={() => {
               const element = document.getElementById('services');
               element?.scrollIntoView({
                block:'start',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
             Services
            </span>

          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;