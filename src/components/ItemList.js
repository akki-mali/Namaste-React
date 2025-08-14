import {useDispatch} from 'react-redux';
import { addItem } from '../utils/CartSlice';

const ItemList = ({ items }) => {

  const dispatch = useDispatch();
  
  const handlClick= (item)=>{
    console.log("Item added to cart", item);
    dispatch(addItem(item))
  }

    return (
      <div className="text-left ">
        {items.map((item) => {
          return (
            <div key={item.card.info.id} className=" border-b-2 border-gray-200 py-5"> 
              <div className="justify-between flex">
                <span className="font-normal">{item.card.info.name}</span>
                <button className="border bg-black text-white p-2" onClick={()=>handlClick(item)}>Add +</button>
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