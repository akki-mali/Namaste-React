import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log("Cart items:", cartItems);

    const dispatch = useDispatch();

    const handleClearCart =()=> {
        console.log("Clearing cart");
        dispatch(clearCart())
    }
    return (
        <div className="text-center mx-auto p-2  w-9/12">
            <h1 className="text-3xl font-bold m-2">Cart</h1>
            <button className="border bg-black text-white p-2 m-2 cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
            <ItemList items={cartItems} />
        </div>
    )
}
export default Cart;