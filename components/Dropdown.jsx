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
               const element = document.getElementById('ei');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
             Drywall Installation and Repair
            </span>
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
               const element = document.getElementById('pd');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
            Painting and Wall Treatments
            </span>
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
               const element = document.getElementById('emes');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
             Flooring Installation and Repair
            </span>
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
               const element = document.getElementById('sss');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
              Electrical Repairs and Installations
            </span>
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
               const element = document.getElementById('dcs');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
             Light Fixture and Ceiling Fan Installation
            </span>
            <span
             className="
             block 
             block
             px-4 
             py-2 
             text-[.8em] 
             text-[#1a0708] 
             hover:bg-[#e41314] 
             hover:text-[#d9b061]
            
            font-[encyclopaediea]
             " 
             onClick={() => {
                const element = document.getElementById('hes');
                element?.scrollIntoView({
                    block:'nearest',
                 behavior: 'smooth'
                });
                 closeDropdown();
             }}
            >
                Furniture Assembly and Repair
              </span>
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
               const element = document.getElementById('ees');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
              Appliance Installation
            </span>
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
               const element = document.getElementById('ldc');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
             Carpentry and Woodworking
            </span>

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
               const element = document.getElementById('em');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
            Door and Window Services
            </span>

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
               const element = document.getElementById('cci');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
           Home Security Upgrades
            </span>
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
               const element = document.getElementById('si');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
            Outdoor and Garden Maintenance
            </span>
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
               const element = document.getElementById('ti');
               element?.scrollIntoView({
                block:'nearest',
                behavior: 'smooth'
               });
                closeDropdown();
            }}
            >
             General Maintenance
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;