
import Cart from "./cart/Cart"
const Header = () => {
    return(
        <div className="sticky top-0 z-50 bg-primary w-full h-[10vh] text-primary flex justify-between items-center">
            <h1>Gamerly</h1>
            <Cart />

        </div>
    )
}

export default Header   