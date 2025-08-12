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

//HOC 

//input is RestaurantCard and returns a new component that adds a label if the restaurant is open
export const isOpen =(RestaurantCard)=> {
  return ({props}) => {  // this is the new component and props is the restaurantData 
    return (
      <>
      <label className="text-green-500">Open</label>
      <RestaurantCard {...props}/>
      </>
    )
  }
}

export default RestaurantCard;