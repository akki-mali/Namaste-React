
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId }= useParams();

  const resInfo = useRestaurantMenu(resId)

  if (resInfo === null) {
    return <Shimmer/>
  }

  const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info || {};
  const menuItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="restaurant">
      <h1>{name}</h1>
      {/* <p>{cuisines.join(", ")}</p> */}
      <p>{costForTwoMessage}</p>
      <div className="menu">
        {menuItems.slice(1, menuItems.length - 1).map((item) => {
          return (
            <div key={item.card.card.categoryId} className="menu-item">
              <h2>{item.card.card.title}</h2>
                {item?.card?.card?.categories?.map((menuItem) => {
                return (
                  <div key={menuItem.categoryId} className="menu-item-details">
                    <h3>{menuItem.title}</h3>
                  </div>
                );
              })}
              
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default RestaurantMenu;