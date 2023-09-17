import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggol = ({ amount, setIncrease, setDecrease }) => {
    return (
        <div className='cart-button'>
            <div className='amount-toggle'>
                <button onClick={()=>{setDecrease()}}> <FaMinus /> </button>
                <div>{amount}</div>
                <button onClick={()=>{setIncrease()}}> <FaPlus /> </button>
            </div>

        </div>
    )
}

export default CartAmountToggol