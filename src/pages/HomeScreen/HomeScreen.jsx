import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import formatGameObjs from "../../utils/formatGames";
import GameCard from "../../components/GameCard";
const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getProducts = async () => {
        try {
            setIsLoading(true)
            const productData = await fetch('https://api.rawg.io/api/games?key=e5c64a9c49864500a278d85516df2eac&page_size=40');
            const response =  await productData.json()
            const formatedGames = formatGameObjs(response.results)
            setProducts(formatedGames)
            console.log(response)
            
        } catch(error){
            console.log(error)
        } finally{
            setIsLoading(false)
        }
     
    }

    useEffect(() => {
        getProducts()
    },[])

    return (
        <div className="col-start-3 col-end-13 border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 m-2">
            {isLoading && <h1>Loading...</h1>}
            {products.map((product)=>{
                return <GameCard key={product.id} {...product}/>
            })}
        </div>
    )
}

export default HomeScreen;