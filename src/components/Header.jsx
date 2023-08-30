
import Cart from "./cart/Cart"
import SearchBar from "./search/SearchBar"
const Header = () => {
    return(
        <div className="sticky top-0 z-50 bg-primary w-full h-[10vh] text-primary grid grid-cols-12">
            <div className="col-start-1 col-end-3 flex items-center">
                <h1 className="w-full">Gamerly</h1>
            </div>
            <SearchBar />
            <Cart />

        </div>
    )
}

export default Header   