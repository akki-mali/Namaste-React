import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router';
import { RESTAURANT_LIST_API_URL } from "../utils/constants";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");


   useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const data= await fetch(RESTAURANT_LIST_API_URL);
      const json = await data.json();
      setlistofRestaurant(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      setFilteredList(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      console.log(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }


  if (listofRestaurant.length === 0) { 
    return (
     <Shimmer />
    );
  }


  return (
    <div>
      <div className="flex m-2">
        <div className='search'>
          <input  className="border-2" type="text" placeholder="Search Restaurant" name="search" value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
          <button  className="border-2 ml-1 bg-gray-50 px-2" onClick={()=>{
           const filteredSearch = listofRestaurant.filter((resto)=> {
              return resto.info.name.toLowerCase().includes(searchText.toLowerCase())
            })
            setFilteredList(filteredSearch)
          }}>Search</button>
      </div>
      <div className='rated-btn ml-2'>
        <button role="button" className="border-2 ml-1 bg-gray-50 px-2 cursor-pointer" onClick={() => {
          const filteredList = listofRestaurant.filter((rest) => {
          return rest.info.avgRating > 4.3
          })     
        setFilteredList(filteredList);
        }}>Top Rated</button>
      </div>
      </div>
      <div className='rest-container flex flex-wrap'>
        {filteredList.map((resto)=> {
          return (
          <Link key={resto.info.id} to={`/restaurant/${resto.info.id}`} className="h-[300px] bg-gray-50 rounded-xs m-2 hover:bg-gray-100"><RestaurantCard restaurantData={resto} /></Link>
        )
        })}
        
      </div>
    </div>
  )
}

export default Body;