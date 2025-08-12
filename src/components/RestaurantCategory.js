
import ItemList from "./ItemList"

const RestaurantCategory =({data, itemExpand, onCategoryToggle })=> {

  const handleClick = (categoryId) => {
    onCategoryToggle(categoryId)
  };
  return (
    <div className="px-3 py-4 w-9/12 mx-auto">
      <h3 className="font-extrabold text-left text-xl">{data.title}</h3>
        {data.categories.map((item) => {
          return (
            <div key={item.categoryId}>
              <div className="justify-between flex items-center border-b-2 border-gray-200 py-5 cursor-pointer" onClick={()=>handleClick(item.categoryId)}>
                <p className="text-left my-2 font-medium text-lg">{item.title}</p>
                <span>↓</span>
               </div>
             {itemExpand===item.categoryId && <ItemList items={item.itemCards}/>}
            </div>
          )
          })}
     </div>
  )
}

export default RestaurantCategory;