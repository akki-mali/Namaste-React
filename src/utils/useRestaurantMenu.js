import { useEffect, useState } from "react";
import { Restaurant_Menu_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async() => {
        const res = await fetch(Restaurant_Menu_API_URL + resId);
        const json = await res.json();
        setResInfo(json?.data);
    }
    
    return resInfo;
}

export default useRestaurantMenu;