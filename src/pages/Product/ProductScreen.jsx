import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImgSlider from "../../components/ImgSlider";
const ProductScreen = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getGame = async (id) => {
        try {
            setIsLoading(true)
            const response = await fetch(`https://api.rawg.io/api/games/${id}?key=e5c64a9c49864500a278d85516df2eac`);
            const gameData = await response.json();
            const screenShots = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=e5c64a9c49864500a278d85516df2eac`);
            const imgList = await screenShots.json()
            
            const gameInfo = {
                name: gameData.name,
                description: gameData.description_raw,
                cover_image: gameData.background_image,
                screenShots: imgList.results,
                rating: gameData.rating,
                platforms: gameData.parent_platforms,
                website: gameData.website,
                released: gameData.released,
                genres: gameData.genres,
                publishers: gameData.publishers[0]
            }
            setGame(gameInfo)
            
            console.log(gameData)
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
            <div className="h-[10vh]">
                <Link to="/">Home</Link>
            </div>
            <div className="border h-[80vh] grid grid-cols-3 grid-rows-3 gap-5 p-5">
                <div className="col-start-1 col-end-3 row-start-1 row-end-4">
                    {game && <ImgSlider imgs={game.screenShots} />}
                </div>
            </div>
        </div>
    )
}

export default ProductScreen