
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

  const { resId }= useParams();

  const resInfo = useRestaurantMenu(resId)

  const [itemExpand, setItemExpand] = useState(null);

  const handleCategoryToggle = (categoryId) => {
    setItemExpand(itemExpand === categoryId ? null : categoryId);
  };

  if (resInfo === null) {
    return <Shimmer/>
  }

  const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info || {};

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");

  return (
    <div className="restaurant text-center w-9/12 mx-auto">
      <h1 className="font-extrabold p-3 mt-3 text-2xl">{name}</h1>
      <p className="mb-4 font-medium">{costForTwoMessage}</p>
      {categories.map((category)=> {
        return (
          <RestaurantCategory key={category?.card?.card?.categoryId} data={category?.card?.card}
          itemExpand={itemExpand}
          onCategoryToggle={handleCategoryToggle}
          />
        )
      })}
    </div>
  )
}

export default RestaurantMenu;