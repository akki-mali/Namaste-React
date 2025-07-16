import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.971599&lng=77.594566&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    console.log(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setlistofRestaurant(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setFilteredList(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }

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
          <RestaurantCard key={resto.info.id} restaurantData={resto} />
        )
        })}
        
      </div>
    </div>
  )
}

export default Body;