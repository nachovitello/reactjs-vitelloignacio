import { Button } from "react-bootstrap"
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";


const ItemCount = ({productId}) => {
    const [countItem, setCountItem] = useState (0);

    const {count, setCount} = useContext(CartContext);

    const handleAdd = () => {
        setCountItem(countItem + 1);
    };

    const handleRemove = () => {
        setCountItem(countItem - 1);
    
        
    };

    const handleAddProductToCart = () => {
        const newProduct = {
            id: productId,
            quantity: countItem,
        }
        if(count.lenght === 0) {
            setCount([newProduct])
        } else {
            const newCount = count.map((item) =>{
            if (item.id === productId) {
                return {
                    ...item,
                    quantity: item.quantity + countItem,
                };
            } else {
                setCount([...count, newProduct]);
            }
            });
           
        }
    }

    return(
        <div>
        <Button onClick={handleAdd}>+</Button>
        <span>{countItem} </span>
        <Button onClick={handleRemove}>-</Button>
        <Button onClick={handleAddProductToCart}>Agregar al Carrito</Button>
        </div>
    )

}

export default ItemCount;