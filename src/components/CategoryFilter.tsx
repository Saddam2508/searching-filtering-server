"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import React, { ChangeEvent } from 'react';

const CategoryFilter = () => {
    
          const searchParams = useSearchParams()
          const router = useRouter()
          const pathname = usePathname()
    
      const handleFiltered = (e:ChangeEvent<HTMLSelectElement>)=>{
        const value = e.target.value
    
     const params = new URLSearchParams(searchParams)
      if(value){
        params.set("category", value)
      } else{
        params.delete("category")
      }
      router.push(`${pathname}?${params.toString()}`)
      }
    return (
        <div>
            <select defaultValue="" className="btn px-4 py-2" onChange={handleFiltered}>
  <option value="">Select a item</option>
  <option value= "burger">Burger</option>
  <option value= "pizza">Pizza</option>
  <option value="rich">Rich</option>
  <option value="dish">Dish</option>
</select>
        </div>
    );
};

export default CategoryFilter;