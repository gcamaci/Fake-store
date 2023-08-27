import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import CartItem from "./CartItem";
const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state)=> state.cart)
    const [isOpen,setIsOpen] = useState(false)
    const count = cartItems.length
    console.log(cartItems)
    const toggleCart = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="w-1/4 flex justify-end">
            <div>
                <div className="">
                    {count}
                </div>
            </div>
            <div className="mx-5">
                <FontAwesomeIcon onClick={toggleCart} className='w-[30px] h-[30px]' icon={faCartPlus} />
            </div>
            {isOpen && 
                <div className="absolute top-[10vh] bg-secondary h-[90vh] w-[300px] transition-opacity duration-1000 ease-in-out ">
                    <h1>Your Cart</h1>
                    {cartItems.map((item,index) => <CartItem key={`${item.name}-${index}`}info={item}/> )}
                </div>
            
            }
            
        </div>
    )
}

export default Cart