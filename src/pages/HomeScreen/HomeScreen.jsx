import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import formatGameObjs from "../../utils/formatGames";
import GameCard from "../../components/GameCard";
import Nav from "../../components/Nav";
const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {id} = useParams()
    const getProducts = async () => {
        try {
            setIsLoading(true)
            const productData = await fetch('https://api.rawg.io/api/games?key=e5c64a9c49864500a278d85516df2eac&page_size=40');
            const response =  await productData.json()
            const formatedGames = formatGameObjs(response.results)
            setProducts(formatedGames)
            
            
        } catch(error){
            console.log(error)
        } finally{
            setIsLoading(false)
        }
     
    }
    const getGenreProducts = async (key) => {
        try {
            setIsLoading(true)
            const genreData = await fetch(`https://api.rawg.io/api/games?key=e5c64a9c49864500a278d85516df2eac&genres=${key}`)
            const genreResponse = await genreData.json()
            const formatedGames = formatGameObjs(genreResponse.results)
            setProducts(formatedGames)

        } catch(error){
            console.log(error)
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if(id){
            getGenreProducts(id)
        }else {
            getProducts()
        }
    },[id])

    return (
        <div className="grid grid-cols-12">
            <Nav />
            <div className="col-start-3 col-end-13 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5">
                {isLoading && <h1>Loading...</h1>}
                {products.map((product)=>{
                    return <GameCard key={product.id} {...product}/>
                })}
            </div>
        </div>
    )
}

export default HomeScreen;