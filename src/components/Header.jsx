
import Cart from "./cart"
const Header = () => {
    return(
        <div className="w-full h-[10vh] text-primary flex justify-between items-center border">
            <h1>Gamerly</h1>
            <Cart />

        </div>
    )
}

export default Header   