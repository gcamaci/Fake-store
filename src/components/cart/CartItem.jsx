/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/slices/cartSlice";
const CartItem = (props) => {
    const {price, name, cover_image,id} = props.info;
    const dispatch = useDispatch()
    const deleteItem = () => {
        dispatch(removeItem(id))
        console.log(id)
    }
    return (
        <div className="m-3 gap-3 flex justify-between items-center">
            <img className="w-1/4" src={cover_image}></img>
            <div className="flex-grow">
                <h1 className="text-xs">{name}</h1>
                <p>{price}</p>
            </div>
            <div className="flex-grow text-end">
                <FontAwesomeIcon onClick={deleteItem} size="xl" icon={faTrashCan} style={{color: "#d94126",}} />
            </div>
        </div>
    )
}

export default CartItem