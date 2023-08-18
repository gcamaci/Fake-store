import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const productData = await fetch('https://api.rawg.io/api/games?key=e5c64a9c49864500a278d85516df2eac&page_size=40');
            const response =  await productData.json()
            setProducts(response)
            console.log(response)
        } catch(error){
            console.log(error)
        }
     
    }

    useEffect(() => {
        getProducts()
    },[])
    return (
        <div className="col-start-3 col-end-13 border">
            homepage
        </div>
    )
}

export default HomeScreen;