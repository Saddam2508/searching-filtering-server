"use client"

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation'; 
import React, { useState } from 'react';


const SearchFood = () => {
    
      const [searchInput, setSearchInput] = useState <string>("")
      const searchParams = useSearchParams()
      const router = useRouter()
const pathname = usePathname()
      const handleSearch = ()=>{
        const params = new URLSearchParams(searchParams)
      if(searchInput){
        params.set("search", searchInput)
      } else{
        params.delete("search")
      }
      router.push(`${pathname}?${params.toString()}`)
      }

    return (
        <div className='flex justify-center items-center'>
             <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" onChange={(e)=>setSearchInput(e.target.value)}/>
</label>
<button onClick={handleSearch} className="btn">Search</button>
        </div>
    );
};

export default SearchFood;