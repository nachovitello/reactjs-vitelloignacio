import { useContext } from "react";
import { CartContext } from "../context/CartContext";





const CartWidget = ( ) => {
    const { count } = useContext(CartContext);
    console.log(count)

    

    return(
        <div>
        🛒
        <span style={{fontSize: '20px'}}>{}</span>
        </div>
    )
}


export default CartWidget;  