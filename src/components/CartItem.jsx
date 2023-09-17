import React from 'react'
import FormatPrice from "../helpers/FormatPrice"
import CartAmountToggle from "./CartAmountToggol";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from '../context/CartContext';


const CartItem = ({id, name, image, color, price, amount}) => {

    const{removeItem, setDecrement, setIncrement}=useCartContext()

  //     const setDecrease = () => {
  //   // amount > 1 ? setAmounts(amount - 1) : setAmounts(1);
  // };

  // const setIncrease = () => {
  //   // amount < stock ? setAmounts(amount + 1) : setAmounts(stock);
  // };
  return (
    <div className="cart_heading grid grid-five-column">
    <div className="cart-image--name">
      <div>
        <figure>
          <img src={image} alt={id} />
        </figure>
      </div>
      <div>
        <p>{name}</p>
        <div className="color-div">
          <p>color:</p>
          <div
            className="color-style"
            style={{ backgroundColor: color, color: color }}></div>
        </div>
      </div>
    </div>
    {/* price  */}
    <div className='cart-hide'>
        <p><FormatPrice price={price}/></p>
    </div>
    {/* quantity */}
    <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrement(id)}
        setIncrease={() => setIncrement(id)}
      />

      {/* subtotal  */}
      <div className='cart-hide'>
        <p><FormatPrice price={price * amount}/></p>
      </div>

      {/* rimove  */}
      <div className=''>
      <FaTrash className="remove_icon" onClick={()=> removeItem(id)}/>
      </div>
    </div>
   
    
  )
}

export default CartItem