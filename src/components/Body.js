import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState(restaurantList);

  return (
    <div>
      <div className='rated-btn'>
        <button role="button" onClick={() => {
        const filteredList = listofRestaurant.filter ((rest) => {
         return rest.data.avgRating >= 4
        })     
        setlistofRestaurant(filteredList);
        }}>Top Rated</button>
      </div>
      <div className='rest-container'>
        {listofRestaurant.map((resto)=> {
          return (
          <RestaurantCard key={resto.data.id} restaurantData={resto} />
        )
        })}
        
      </div>
    </div>
  )
}

export default Body;