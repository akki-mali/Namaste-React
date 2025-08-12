
const ItemList = ({ items }) => {

    return (
      <div className="text-left ">
        {items.map((item) => {
          return (
            <div key={item.card.info.id} className=" border-b-2 border-gray-200 py-5"> 
              <div className="justify-between flex">
                <span className="font-normal">{item.card.info.name}</span>
              </div>
              <p>₹{item.card.info.price /100 || item.card.info.defaultPrice / 100}</p>
             <p className="font-light text-gray-500">{item.card.info.description}</p>
            </div>
          )
        })}
     
      </div>
    )
}

export default ItemList;