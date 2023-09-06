import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import ImgSlider from "../../components/ImgSlider";
import Description from "../../components/Description";
import { addItem } from "../../redux/slices/cartSlice";
import Header from "../../components/Header";

const ProductScreen = () => {
    const { id, price} = useParams();
    const [game, setGame] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector((state)=> state.cart)
    
    const addToCart = () => {
        if(game){
            dispatch(addItem(game))
            console.log(cartItems)
        }
    }

    const getGame = async (id) => {
        try {
            setIsLoading(true)
            const response = await fetch(`https://api.rawg.io/api/games/${id}?key=e5c64a9c49864500a278d85516df2eac`);
            const gameData = await response.json();
            const screenShots = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=e5c64a9c49864500a278d85516df2eac`);
            const imgList = await screenShots.json()
            
            const gameInfo = {
                name: gameData.name,
                desc: gameData.description_raw,
                cover_image: gameData.background_image,
                screenShots: imgList.results,
                rating: gameData.rating,
                platforms: gameData.parent_platforms,
                website: gameData.website,
                released: gameData.released,
                genres: gameData.genres,
                publisher: gameData.publishers[0],
                id:id,
                price:price
            }
            setGame(gameInfo)
            
            
            console.log(gameInfo)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getGame(id)
    },[id])
    return (
        <div className="">
            <Header />
        {game && (
            <>
                <div className="mx-5 h-[10vh] flex justify-between items-center text-primary">
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <h1>{game.name}</h1>
                    </div>
                </div>
                <div className="h-[80vh] grid grid-cols-3 grid-rows-3 gap-1 p-5 text-primary">
                    <div className="col-start-1 col-end-3 row-start-1 row-end-4">
                        <ImgSlider imgs={game.screenShots} />
                    </div>
                    <div className="col-start-3 col-end-4 row-start-1 row-end-3">
                        <Description info={game}/>
                    </div>
                    <div className="flex items-end justify-end">
                        <button onClick={addToCart}>Add to Cart +</button>
                    </div>
                </div>
            </>
        )}
    </div>
    )
}

export default ProductScreen