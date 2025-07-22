import { useEffect, useState } from "react";
import { RESTAURANT_LIST_API_URL } from "../utils/constants";

const useRestaurantCards = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data= await fetch(RESTAURANT_LIST_API_URL);
    const json = await data.json();
    setlistofRestaurant(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setFilteredList(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }

  return [listofRestaurant, filteredList, setFilteredList];
}

export default useRestaurantCards;