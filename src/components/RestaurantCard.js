import { Restaurant_URL } from "../utils/constants";  

const RestaurantCard =({restaurantData})=> {
  const {name, location, cuisines, avgRating} = restaurantData?.data;
  // Destructuring restaurantData to get the data object

  return (
    <div className='restaurant-card'>
      <img className="rest-logo" src={Restaurant_URL} alt="Restaurant" />
      <h3>{name}</h3>
      <p>{location}</p>
      <p>{avgRating} stars</p>
      <p>{cuisines.join(", ")}</p>
    </div>
  )
}

export default RestaurantCard;