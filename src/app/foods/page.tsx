

import CategoryFilter from "@/components/CategoryFilter";
import FoodCard, { Food } from "@/components/FoodCard";
import SearchFood from "@/components/SearchFood";


const fetchFood = async (category: string = "",  search: string = "")=>{
const res = await fetch (`https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`)
const data = await res.json()
return data.data
  }

export default async function Home({ searchParams }: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
const sp = await searchParams

  const foods: Food[] = await fetchFood(sp.category, sp.search)
  


  return (
    <div className="container mx-auto">
    <h1>All Foods : {foods.length}</h1>
    <div className="flex justify-center items-center mb-8">
     <SearchFood/>
<CategoryFilter/>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {foods.map(food=> <FoodCard key={food.id} food = {food} />)}
    </div>
    </div>
  );
}
