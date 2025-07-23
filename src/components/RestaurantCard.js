import { Restaurant_URL } from "../utils/constants";  

const RestaurantCard =({restaurantData})=> {
  const {name, location, cuisines, avgRating, cloudinaryImageId} = restaurantData?.info;
  // Destructuring restaurantData to get the data object

  return (
    <div className='w-[200px] p-4 border-gray-50 '>
      <img className="rest-logo " src={Restaurant_URL} alt="Restaurant" />
      <h3 className="font-bold py-2">{name}</h3>
      <p>{location}</p>
      <p>{avgRating} stars</p>
      <p>{cuisines.join(", ")}</p>
    </div>
  )
}

export default RestaurantCard;