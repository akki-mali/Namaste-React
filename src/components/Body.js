import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router';
import useRestaurantCards from "../utils/useRestaurantCards";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [listofRestaurant, filteredList, setFilteredList] = useRestaurantCards();

  if (listofRestaurant.length === 0) { 
    return (
     <Shimmer />
    );
  }


  return (
    <div>
      <div className="filter-container">
        <div className='search'>
          <input type="text" placeholder="Search Restaurant" name="search" value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
          <button  className="search-btn" onClick={()=>{
           const filteredSearch = listofRestaurant.filter((resto)=> {
              return resto.info.name.toLowerCase().includes(searchText.toLowerCase())
            })
            setFilteredList(filteredSearch)
          }}>Search</button>
      </div>
      <div className='rated-btn'>
        <button role="button" onClick={() => {
          const filteredList = listofRestaurant.filter((rest) => {
          return rest.info.avgRating > 4.2
          })     
        setFilteredList(filteredList);
        }}>Top Rated</button>
      </div>
      </div>
      <div className='rest-container'>
        {filteredList.map((resto)=> {
          return (
          <Link key={resto.info.id} to={`/restaurant/${resto.info.id}`}><RestaurantCard  restaurantData={resto} /></Link>
        )
        })}
        
      </div>
    </div>
  )
}

export default Body;